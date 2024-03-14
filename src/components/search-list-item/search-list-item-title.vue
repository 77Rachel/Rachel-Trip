<template>
  <div class="search-list-item-title">
    <div class="subTtitle">
      <div class="address">
        {{ itemTitle.address }}
      </div>
      <div class="type">
        {{ itemTitle.unitSummeries[0].text }} · {{ itemTitle.unitSummeries[1].text }}
      </div>
    </div>
    <div class="headTtitle">
      {{ itemTitle.unitName }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemTitle: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.search-list-item-title{
  margin-left: 17px;
  .subTtitle{
    display: flex;
    margin-top: 5px;
    .address{
      border-radius: 2px;
      padding: 3px 3px 0 3px;
      font-size: 12px;
      color: azure;
      background: #000;
    }
    .type{
      color: #666;
      padding-top: 2px;
      margin-left: 10px;
      font-size: 12px;
    }
  }
  .headTtitle{
    margin-top: 8px;
    margin-right: 16px;
    line-height: 22px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>