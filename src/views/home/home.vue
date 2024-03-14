<template>
  <div class="home" ref="homeRef">
    <!-- 标题组件 -->
    <HomeNavBar></HomeNavBar>
    <!-- 标题图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- 城市展示 -->
    <SearchBox></SearchBox>
    <!-- 滚动小菜单 -->
    <Categories></Categories>
    <!-- 动态搜索框 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar/>
    </div>
    <!-- 具体热门内容 -->
    <Content></Content>
    <!-- 先用按钮模拟分页,已实现滚动加载 -->
    <!-- <button @click="addMoreBtn">加载更多</button> -->
    
  </div>
</template>

<!-- 用于keep-alive -->
<script>
export default { name: "home" }
</script>

<script setup>
import { ref, watch, onActivated } from 'vue';
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from "./cpns/home-nav-bar.vue";
import SearchBox from "./cpns/home-search-box.vue";
import Categories from "./cpns/home-categories.vue";
import Content from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";
import useScroll from '@/hooks/useScroll';
import { computed } from '@vue/reactivity';

// 发送网络请求获取数据
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();


// 模拟按钮
// const addMoreBtn = () => {
//   homeStore.fetchHouselistData();
// }

// 滚动加载
// 封装后只在其内部知道滚动到底部,外界home页面不知道,传入一个回调函数解决
// 但当有很多地方都需要使用时函数显得不如变量方便管理
// 因此最终采用传入变量获取是否滚到底部
// 再使用监听进行后续操作

// 解决跳转发送请求的问题
const homeRef = ref();

// 拿到回调结果
const { isReachBottom, scrollTop } = useScroll(homeRef);
// 后续还有逻辑代码使用监听滚动变量和它返回的值
watch(isReachBottom, (newValue) => {
  if (newValue) {
    // 判断请求有没有结果
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    })
  }
})
// 只需操作变量(响应式数据依赖另一个响应式数据)采用计算属性搜索框的变量
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});

// 保留跳转前的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})


</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner {
  img {
    width: 100%;
  }
}
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}


</style>