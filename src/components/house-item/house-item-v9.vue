<template>
  <div class="house-item">
    <!-- v9的布局 -->
    <div class="item-inner">
      <!-- 图片 -->
      <div class="picture">
        <!-- 加?能使加载不出数据但也不报错,只是无法显示,返回的是undefined -->
        <img :src="itemData?.image?.url" alt="">
      </div>
      <!-- 具体信息 -->
      <div class="houseInfo">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="houseName">{{ itemData.houseName }}</div>
        <!-- 价格评分 -->
        <div class="price">
          <van-rate :model-value="itemScore" color="yellow" :size="15" readonly allow-half />
          <div class="nowPrice">¥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.itemData.commentScore);
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    font-weight: 600;

    .picture {
      img {
        width: 100%;
      }
    }

    .houseInfo {
      position: absolute;
      bottom: 0;
      padding: 5px 10px;
      color: #fff;

      .summary {
        position: relative;
        top: 3px;
        font-size: 13px;
      }

      .houseName {
        font-size: 15px;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3px;

        .nowPrice {
          font-size: 15px;
        }
      }
    }
  }
}</style>