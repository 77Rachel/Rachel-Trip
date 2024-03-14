<template>
  <div class="app">
    <router-view v-slot="props">
      <!-- 动态组件占位,作用域插槽拿到要缓存的组件 -->
      <keep-alive includes="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <!-- 页面加载提示功能.... -->
    <Loading/>
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<style lang="less" scoped>

</style>
