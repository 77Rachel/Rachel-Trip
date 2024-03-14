<template>
  <div class="msgTips">
    <!-- 评分 -->
    <span class="score" v-if="msgTips.overall">
      {{ msgTips.overall }}分
    </span>
    <!-- 是否推荐 -->
    <span class="recommend">
      {{ msgTips.scoreTitle }}
    </span>
  </div>
</template>

<script setup>

const props = defineProps({
  msgTips: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.msgTips{
  width: 68px;
  padding: 3px 3px;
  border-radius: 10px;
  text-align: center;
  background: hsla(0, 0%, 100%, 0.9);
  .score{
    font-size: 14px;
    font-weight: 700;
    margin-right: 4px;
  }
  .recommend{
    font-size: 12px;
    color: #666;
  }
}
</style>