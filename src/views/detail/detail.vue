<template>
  <!-- 当前滚动的是detail这个div -->
  <div ref="detailRef">
    <div class="detail" ref="detailRef">
      <!-- 导航栏 -->
      <TabControl v-if="showTabControl" class="tabs" :titles="names" @tab-item-click="tabClick" ref="tabControlRef" />
      <!-- 顶部标题栏 -->
      <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />

      <!-- v-memo:绑定对象修改才刷新 -->
      <div class="mainPart" v-if="mainPart" v-memo="[mainPart]">
        <!-- 轮播图展示,当请求数据有值时才显示,用处跟?一样 -->
        <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
        <!-- 详情信息展示 -->
        <DetailInfos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule" />
        <!-- 设施详情 -->
        <DetailFacility name="设施" :ref="getSectionRef"
          :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
        <!-- 房东详情 -->
        <DetailLandLord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
        <!-- 房东评价 -->
        <DetailComment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
        <!-- 用户须知 -->
        <DetailNotice name="须知" :ref="getSectionRef" :orderRules="mainPart.dynamicModule.rulesModule.orderRules" />
        <!-- 地图显示 -->
        <DetailMap name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
        <!-- 温馨提示 -->
        <DetailIntro :price-intro="mainPart.introductionModule" />
      </div>
      <!-- 底部信息展示 -->
      <div class="footer">
        <img src="@/assets/img/detail/icon_ensure.png" alt="">
        <div class="text">RC旅途,永无止境~</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getDetailInfos } from "@/services";

import TabControl from "@/components/tab-control/tab-control.vue";
import useScroll from '@/hooks/useScroll';
import DetailSwipe from "./details/detail-swipe.vue";
import DetailInfos from "./details/detail-infos.vue";
import DetailFacility from "./details/detail-facility.vue";
import DetailLandLord from "./details/detail-landlord.vue";
import DetailComment from "./details/detail-comment.vue";
import DetailNotice from "./details/detail-notice.vue";
import DetailMap from "./details/detail-map.vue";
import DetailIntro from "./details/detail-intro.vue";

const route = useRoute();
const router = useRouter();
// 路由获取houseId
const houseId = route.params.id;
// 返回的详情数据(对象)
const detailInfos = ref({});
// 复杂数据的分割处理(记得加value)
const mainPart = computed(() => detailInfos.value.mainPart);

// 非pinia的网路请求数据管理
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data;
})

// 返回上一级
const onClickLeft = () => {
  router.back();
}

// 导航栏动态实现
const detailRef = ref();
// 无法绑定标签传入ref判断,滚动对象为windows
const { scrollTop } = useScroll();
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// 滚动到对应位置
const sectionEls = ref({});
// 动态获取名字
const getSectionRef = (value) => {
  if (!value) return
  const name = value.$el.getAttribute("name");
  // name为他的key,value.$el为他的值
  sectionEls.value[name] = value.$el;
}

// 返回名字
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

// 控制导航栏匹配没有滚动效果
let isClick = false;
// 记录滚动的距离用于匹配
let distance = -1;

// 点击计算索引
const tabClick = (index) => {
  // 通过index拿到对应索引的key值
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  isClick = true;
  // 获取对应元素距离顶部距离
  let instance = el.offsetTop;
  if (instance != 0) {
    instance -= 44;
  }
  // 获取滚动距离用于匹配
  distance = instance;
  // 滚动的实现
  window.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}

// 滚动匹配导航栏
const tabControlRef = ref();
// 监听滚动
watch(scrollTop, (newValue) => {
  //console.log("有滚动")
  // 滚动到目的地后,重启匹配方法
  if (newValue === distance) {
    isClick = false;
    //console.log("滚动到目的地" + isClick)
  }
  // 如果点击,停止导航栏滚动方法
  if (isClick) {
    //console.log("停止后续方法" + isClick)
    return
  }
  // 获取每个区域的距顶距离
  const els = Object.values(sectionEls.value);
  const values = els.map(el => el.offsetTop);
  // 遍历对比距离得出要显示的区间
  let index = values.length - 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1;
      break
    }
  }
  // 修改子组件的值
  tabControlRef.value?.setIndex(index);
})

</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.detail {
  :deep(.van-nav-bar__text) {
    font-weight: 700;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>