<template>
  <div class="buttonBox" v-if="orderBtn.orderStatus === 1">
    <button class="button tel">联系房东</button>
    <button class="button pay">去支付</button>
  </div>

  <div class="buttonOther" v-if="orderBtn.orderStatus === 5">
    <button class="button del">删除</button>
    <button class="button again">再次预定</button>
  </div>
</template>

<script setup>
const props = defineProps({
  orderBtn: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.buttonBox{
  font-size: 15px;
  .tel{
    margin-right: 10px;
    background: white;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    min-width: 80px;
    min-height: 35px;
  }
  .pay{
    background: #ff9854;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    color: white;
    min-width: 80px;
    min-height: 35px;
  }
}
.buttonOther{
  position: relative;
  left: 168px;
  font-size: 15px;
  .del{
    margin-right: 10px;
    background: white;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    min-width: 80px;
    min-height: 35px;
  }
  .again{
    background: white;
    border: 1px solid #ff9854;
    border-radius: 8px;
    color: #ff9854;
    min-width: 80px;
    min-height: 35px;
  }
}
</style>