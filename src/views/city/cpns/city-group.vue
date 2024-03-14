<template>
  <div class="city-group">
    <!-- 使用vant的标题栏组件 -->
    <!-- 右侧字母导航栏的卡位 -->
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <!-- 展示热门城市 -->
      <div class="list">
        <template v-for="(city,index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>


      <!-- 双层循环分组 -->
      <template v-for="(group, index) in groupData.cities" :key="index">
        <!-- 每组标题下显示城市 -->
        <van-index-anchor :index="group.group"></van-index-anchor>
        <!-- 遍历城市名 -->
        <template v-for="(city, CityIndex) in group.cities" :key="CityIndex">
          <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>
    
    <!-- 传统vue写法 -->
    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2>{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, CityIndex) in group.cities" :key="CityIndex">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const cityStore = useCityStore()

// 自定义导出的数据
const props = defineProps({
    groupData:{
      type:Object,
      default: () => ({})
    }
  })

  // 动态的索引
  // computed处理表达式
const indexList = computed(() => {
  // 拿到自定义值只能通过变量props
  //通过map映射返回一个标题数组
  const list = props.groupData.cities.map(item => item.group);
  // 添加#号
  list.unshift("#");
  return list;
})

// 监听城市的点击进行切换
const cityClick = (city) => {
  //console.log(city)
  //切换首页显示城市
  cityStore.currentCity = city;
  // 返回上一级
  router.back();
}


</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 11px;
  padding-right: 26px;
  margin-top: -20px;
  margin-bottom: -18px;
  .city{
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    text-align: center;
    color: #000;
    font-size: 12px;
    margin: 9px 0px;
  }
}
</style>