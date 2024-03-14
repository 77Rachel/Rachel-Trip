<template>
  <!-- 底部栏的实现 -->
  <div class="tab-bar">
    <template v-for="(item,index) in tabbarData">
      <!-- 冒号即表示动态事件,单击传入索引和当前元素 -->
      <div 
        class="tab-bar-item"
        :class="{ active: currentIndex === index }" 
        @click="itemClick(index,item)"
        >
        <!-- vite获取本地图片&&动态拿取数据&&切换样式 -->
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{item.text}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import tabbarData from "@/assets/data/tabbar.js";
  import { getAssetURL } from "@/utils/load_assets.js";
  import { useRouter } from "vue-router";
  
  // 定义变量
  const currentIndex = ref(0);
  const router = useRouter();

  // 点击切换底部栏样式&&路由
  const itemClick = (index,item) => {
    currentIndex.value = index;
    router.push(item.path);
  }

</script>

<style lang="less" scoped>
  .tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;

    border-top: 1px solid #f3f3f3;

    .tab-bar-item{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active{
        color: var(--primary-color);
      }

      img{
        width: 36px;
      }

      .text{
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }

</style>