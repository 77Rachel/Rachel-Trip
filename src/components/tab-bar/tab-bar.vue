  <!-- 底部栏的vant实现 -->
<template>
  <div class="tab-bar">
    <!-- vant 库中的 导航栏 -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <!-- 导航栏里面的item -->
        <van-tabbar-item :to="item.path">
          <!-- 通过插槽修改默认样式 -->
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref,watch } from "vue";
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetURL } from "@/utils/load_assets.js";
import { useRoute } from "vue-router";

// 手动切换路由图标不变色,原因是没拿到currentIndex所以不会触发v-if
// 监听路由改变,获取对应索引修改即可
const route = useRoute();
watch(route,(newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path);
  if (index === -1) {
    return
  }
  currentIndex.value = index;
})

// 定义变量
const currentIndex = ref(0);

</script>

<style lang="less" scoped>
.tab-bar {


  img {
    height: 26px;
  }
}
</style>