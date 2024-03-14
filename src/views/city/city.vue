<template>
  <div class="city">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置" 
      shape="round" 
      show-action 
      @cancel="cancelClick" />

      <!-- 2.tab的切换 -->
      <!-- tabActive默认索引 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <!-- title用于展示,name用于tabActive绑定赋值 -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 城市数据的展示 -->
    <div class="content">
      <!-- 优化渲染速度 -->
      <template v-for="(value,key,index) in allCities" key="index">
        <!-- 判断是否等于当前副标题 -->
        <CityGroup v-show="tabActive === key" :group-data="value"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';
import CityGroup from './cpns/city-group.vue'

const router = useRouter();

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back();
}


// tab的切换
const tabActive = ref();


// 从Store中获取数据
const cityStore = useCityStore();
// 内部发送一次请求
cityStore.fetchAllCitiesData();
// 请求数据变为响应式数据
const { allCities } = storeToRefs(cityStore);

// 获取选中标签后的数据
// 获取正确的key: 将tabs中绑定的tabAction正确绑定
// 根据key从allCities获取数据,包裹computed实现响应式
const currentGroup = computed(() => allCities.value[tabActive.value]);


</script>

<style lang="less" scoped>
.city {

  .top {
    position: relative;
    z-index: 9;
  }


  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
