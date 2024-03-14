<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <HouseItemV3 v-if="item.discoveryContentType === 3" 
        :item-data="item.data" 
        @click="itemClick(item.data)"
        />
        <HouseItemV9 v-else-if="item.discoveryContentType === 9" 
        :item-data="item.data"
        @click="itemClick(item.data)" 
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import HouseItemV3 from "@/components/house-item/house-item-v3.vue";
import HouseItemV9 from "@/components/house-item/house-item-v9.vue";
import useHomeStore from '@/stores/modules/home';
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const router = useRouter();

// 名字必须跟pinia中的对上,否则用不了
const { houseList } = storeToRefs(homeStore);

// 绑定item跳转详情页面
const itemClick = (item) => {
  router.push("/detail/" + item.houseId);
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>