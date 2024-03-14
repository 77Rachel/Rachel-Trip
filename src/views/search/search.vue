<template>
  <div class="search">
    <!-- 搜索框 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <template #title>
        <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" :label="currentCity.cityName" />
      </template>
      <template #right>
        <img class="icon-right" src="/src/assets/img/home/icon-right-menu.png" alt="">
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ff9854">
      <van-dropdown-item title="位置" />
      <van-dropdown-item title="位置" />
      <van-dropdown-item title="筛选" />
      <template v-for="(item, index) in topList">
        <h2>{{ item.gType }}</h2>
      </template>
    </van-dropdown-menu>


  </div>
</template>

<script setup>
import { ref } from "vue";
import { toRaw } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useCityStore from '@/stores/modules/city';
import useSearchStore from "@/stores/modules/search";
import { getSearchTop } from "@/services/modules/search";

const router = useRouter();
const searchStore = useSearchStore();
const value = ref("");


// 网络请求
searchStore.fetchTopListData();
const { topList } = storeToRefs(searchStore);
// const { topList } = toRaw(searchStore);
// console.log(topList.value[1].items);
// getSearchTop().then((res) => {
//   searchConditions.value = res.data.data.allConditions;
// });
// let searchConditions = toRaw(topList.value);
// searchConditions = toRaw(topList.value)
// console.log(searchConditions);


// 搜索框部分
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

// 下拉菜单
const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 0 },
  { text: '好评排序', value: 1 },
  { text: '销量排序', value: 2 },
];
const option3 = [
  { text: '默认排序', value: 0 },
  { text: '好评排序', value: 1 },
  { text: '销量排序', value: 2 },
];



// 返回上一页
const onClickLeft = () => {
  router.go(-1);
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__title) {
  padding-left: 20px;
  max-width: 73%;
}

:deep(.van-search__label) {
  padding-right: 8px;
}

.search {
  .icon-right {
    width: 20px;
    height: 15px;
  }
}
</style>