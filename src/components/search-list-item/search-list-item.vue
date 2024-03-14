<template>
  <div class="search-list-item">
    <!-- 轮播图 -->
    <div class="swiper-wrapper">
      <van-swipe class="swip-list" 
                 style="height: 200px;" :autoplay="3000" 
                 :show-indicators="false" 
                 vertical
                 duration="800"
                 >
        <template v-for="(item, index) in itemData.pictureList">
          <van-swipe-item class="item">
            <img :src="item" alt="">
          </van-swipe-item>
        </template>
      </van-swipe>
      <!-- 轮播图内部信息 -->
      <!-- 分页器 -->
      <div class="msgTips">
        <MsgTips :msg-tips="itemData.commentBriefForCD"></MsgTips>
      </div>
      <!-- 侧边栏 -->
      <div class="toolBar">
        <ToolBar :tool-data="itemData"></ToolBar>
      </div>
    </div>
    <!-- 具体信息 -->
    <div class="content">
      <SearchListItemTitle :item-title="itemData"></SearchListItemTitle>
      <SearchListItemInfo :item-info="itemData"></SearchListItemInfo>
    </div>
  </div>
</template>

<script setup>
import SearchListItemInfo from "./search-list-item-info.vue";
import SearchListItemTitle from "./search-list-item-title.vue";
import ToolBar from "./toolBar.vue";
import MsgTips from "./msgTips.vue";

// 接受父传值
const props = defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})

//console.log(props.itemData)
//  console.log(props.itemData.pictureList)


</script>

<style lang="less" scoped>
.search-list-item{
  margin: 15px 0px;
  .swiper-wrapper{
    position: relative;
    .swip-list{
      margin: 15px 13px 0 13px;
      border-radius: 7px;
      .item {
        img {
          width: 100%;
        }
      }
    }
    .msgTips{
      position: absolute;
      bottom: 3px;
      left: 9px;
    }
    .toolBar{
      position: absolute;
      right: 10px;
      top: 16px;
    }
  }
}
</style>