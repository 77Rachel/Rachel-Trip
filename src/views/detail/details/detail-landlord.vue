<template>
  <div class="landlord">
    <DetailSection title="房东介绍" moreText="查看房东主页">
      <div class="introduce">
        <!-- 顶部图片 -->
        <div class="top">
          <img :src="landlord.topScroll" alt="">
        </div>
        <!-- 中间内容 -->
        <div class="header">
          <!-- 左侧 -->
          <div class="left">
            <!-- 头像 -->
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="">
            </div>
            <div class="info">
              <!-- 房东名字 -->
              <div class="name">
                {{ landlord.hotelName }}
              </div>
              <!-- 房东评价tags -->
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags" :key="index">
                  <div class="item" :style="{ color:item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span class="divider" 
                    v-if="index != landlord.hotelTags.length - 1">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <!-- 底部内容 -->
        <div class="bottom">
          <template v-for="(item,index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>

import DetailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  landlord:{
    type: Object,
    default: () => ({})
  }
})


</script>

<style lang="less" scoped>
.introduce {
  .top {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;
      .avatar {
        img {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          margin-right: 4px;
        }
      }

      .name {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 600;
      }

      .tags {
        display: flex;
        margin-top: 5px;
        font-size: 12px;

        .divider {
          margin: 0 5px;
        }
      }
    }

    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 20px 10px 0;

    .item {
      font-size: 12px;
      .title {
        color: #999;
      }
      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        color: #666;
      }
    }
  }
}
</style>