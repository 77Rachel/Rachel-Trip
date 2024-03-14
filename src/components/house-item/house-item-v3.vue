<template>
  <div class="house-item">
    <!-- v3的布局 -->
    <div class="item-inner">
      <!-- 图片 -->
      <div class="picture">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="houseInfo">
        <!-- 具体位置 -->
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <!-- 详情介绍 -->
        <div class="houseName">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <!-- 价格展示 -->
        <div class="price">
          <div class="nowPrice">¥{{ itemData.finalPrice }}</div>
          <div class="prePrice">¥{{ itemData.productPrice }}</div>
          <div class="countPrice" v-if="itemData.priceTipBadge">{{ itemData.priceTipBadge.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    margin: 5px;
    background: #fff;
    overflow: hidden;
    font-weight: 600;

    .picture {
      img {
        border-radius: 4px;
        width: 100%;
      }
    }

    .houseInfo {
      margin: 0 6px;

      .location {
        margin: 8px 0;

        img {
          width: 13px;
          height: 13px;
        }

        span {
          position: relative;
          top: -2px;
          text-align: center;
          font-size: 13px;
          color: #666;
        }
      }

      .summary {
        font-size: 14px;
        line-height: 20px;
      }

      .houseName {
        margin-top: -2px;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        margin-top: 6px;

        .nowPrice {
          color: #ff9645;
          font-size: 18px;
        }

        .prePrice {
          color: #999;
          margin: 0 6px;
          font-size: 14px;
          text-decoration: line-through;
        }

        .countPrice {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 1px 5px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>