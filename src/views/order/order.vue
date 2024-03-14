<template>
  <div class="order">
    <!-- 顶部 -->
    <van-nav-bar left-text="返回" title="订单中心" left-arrow @click-left="onClickLeft"/>
    <!-- 标签分页栏 -->
    <van-tabs v-model:active="active">
      <van-tab title="全部订单">
        <OrderItem :order-item="orderAll"></OrderItem>
      </van-tab>
      <van-tab title="近期订单">
        <OrderItem :order-item="orderRecent"></OrderItem>
      </van-tab>
      <van-tab title="待支付">
        <OrderItem :order-item="orderPend"></OrderItem>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getOrderType } from "@/services/modules/order";
import OrderItem from "@/components/order-list-item/order-item.vue";

const router = useRouter();
const active = ref(0);
const orderAll = ref([0]);
const orderRecent = ref([0]);
const orderPend = ref([0]);

// 发送请求
getOrderType().then(res => {
  orderAll.value = res.data.data.orders || [];
})
// 参数自定义要加引号
getOrderType("recent").then(res => {
  orderRecent.value = res.data.data.orders || [];
})

getOrderType("pend").then(res => {
  orderPend.value = res.data.data.orders || [];
})
// 点击返回上一页
const onClickLeft = () => {
  router.go(-1);
}
</script>

<style lang="less" scoped>
.order{
  padding-bottom: 55px;
}
</style>