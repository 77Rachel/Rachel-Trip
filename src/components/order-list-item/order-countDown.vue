<template>
  <div class="orderCountDown">
    <span class="time">{{ remainingTime }}分</span>
    <span class="msg">后订单自动取消</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  orderCountDown: {
    type: Number,
    default: ''
  }
})

const remainingTime = ref(0);
const timeId = ref(null);
let counter = 1;

const startCountDown = () => {
  timeId.value = setInterval(() => {
    remainingTime.value = parseInt((props.orderCountDown - counter) / 60);
    counter++;
    if (remainingTime.value <= 0) {
      clearInterval(timeId.value);
      return;
    }
  }, 1000);
};

onMounted(() => {
  startCountDown();
});
</script>

<style lang="less" scoped>
.time{
  color: #ff9854;
}
</style>