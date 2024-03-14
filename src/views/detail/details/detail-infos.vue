<template>
  <div class="infos">
    <!-- 大名字展示 -->
    <div class="name">{{ topInfos.houseName }}</div>
    <!-- 小标遍历(可能不存在加个if判断) -->
    <div class="tags">
      <template v-for="(item,index) in topInfos.houseTags" :key="index">
        <span class="item"
        v-if="item.tagText"
        :style="{ color:item.tagText.color, background:item.tagText.background.color }">
        {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <!-- 评分 -->
    <div class="comment outline">
      <div class="comment-left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">"{{ topInfos.commentBrief.commentBrief }}"</span>
      </div>
      <!-- 评论  -->
      <div class="comment-right">
        <span class="count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <!-- 箭头图标 -->
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <!-- 具体地址 -->
    <div class="position outline">
      <div class="position-left">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="position-right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>

  defineProps({
    topInfos: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style lang="less" scoped>
.infos{
  padding: 16px;
  background-color: #fff;
  .name{
    font-size: 20px;
    font-weight: 700;
    color: #333;
  }
  .tags{
    margin: 10px 0;
    .item{
      font-size: 12px;
      margin: 0 2.5px;
      padding: 2px 3px;
    }
  }
  .outline{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f5f7fa;
  }
  .comment{
    .comment-left{
      color:#333;
      .score{
        font-size: 18px;
        font-weight: 700;
      }
      .title{
        font-weight: 700;
        margin: 0 4px;
      }
      .brief{
        color: #666;
      }
    }
    .comment-right{
      font-weight: 700;
      color: #ff9645;
    }
  }
  .position{
    .position-left{
      font-size: 14px;
      font-weight: 700;
    }
    .position-right{
      font-weight: 700;
      color: #ff9645;
    }
  }
}
</style>