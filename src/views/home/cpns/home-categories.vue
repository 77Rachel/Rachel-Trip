<template>
  <!-- pinia+网络请求 -> 组件引入数据导出使用 -->
  <div class="categories">
    <!-- 同样动态获取数据 -->
    <template v-for="(item,index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import  useHomeStore  from "@/stores/modules/home";
  import { storeToRefs } from "pinia";

  // pinia获取数据回显
  const homeStore = useHomeStore();
  const { categories } = storeToRefs(homeStore);

</script>


<style lang="less" scoped>
.categories{
  display: flex;
  overflow-x: auto;
  height: 80px;
  margin-top: 10px;
  &::-webkit-scrollbar{
    display: none;
  }
  .item{
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 3px;
    width: 70px;

    img{
      width: 32px;
      height: 32px;
    }
    .text{
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>