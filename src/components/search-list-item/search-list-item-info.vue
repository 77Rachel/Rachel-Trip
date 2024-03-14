<template>
  <div class="search-list-item-info">
    <div class="count">
      <!-- 为什么有些展示不出来报错,就是因为不是每个都有那个值要加?或者v-if -->
      <!-- {{ itemInfo.allActiveAndRedPacket?.activeRedPacket[1]?.title }} -->
      <template v-for="(item, index) in itemInfo.houseTags" :key="index">
        <van-tag :color="item.background.color" :text-color="item.color">
          {{ item.text }}
        </van-tag>
      </template>
    </div>
    <div class="price">
      <div class="prePrice">
        <span class="symbol">¥</span>
        {{ itemInfo.finalPrice }}
      </div>
      <div class="oldPrice">¥{{ itemInfo.productPrice }}</div>
    </div>
    <div class="noticeCount" v-if="itemInfo.priceTipBadge">
      <i class="icon-unit-sound"></i>
      {{ itemInfo.priceTipBadge.text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemInfo: {
    type: Object,
    default: () => { }
  }
})

</script>

<style lang="less" scoped>
.search-list-item-info{
  height: 45px;
  .count{
    margin: 5px 17px;
    :deep(.van-tag) {
      margin-right: 6px;
    }
  }
  .price{
    display: flex;
    align-items: center;
    margin-left: 16px;
    .symbol{
      position: relative;
      left: 4px;
      font-size: 14px;
    }
    .prePrice{
      color: #ff9645;
      font-size: 21px;
    }
    .oldPrice{
      text-decoration: line-through;
      font-size: 12px;
      padding-top: 5px;
      padding-left: 10px;
      color: #999;
    }
  }
  .noticeCount{
    width: 37%;
    color:#fff;
    background: rgb(251, 74, 74);
    border-radius: 8px;
    padding-left: 6px;
    transform: scale(0.9);
    transform: translate(108px,-20px);
    .icon-unit-sound {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-image: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/unit-item-m/icon-unit-sound.png);
      background-size: 10px 10px;
      background-repeat: no-repeat;
      background-position: 50%;
    }
  }
}

</style>