<template>
  <div class="comment">
    <DetailSection title="热门评论" :moreText="`查看全部${comment.totalCount}条评论`">
      <!-- 内容主体 -->
      <div class="comment-inner">
        <!-- 上层 -->
        <div class="header">
          <!-- 上左 -->
          <div class="left">
            <!-- 分数 -->
            <div class="score">
              <span class="text">{{ comment.overall }}</span>
              <div class="line"></div>
            </div>
            <!-- 具体信息 -->
            <div class="info">
              <div class="title">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
              <div class="star">
                <van-rate v-model="comment.overall" color="#ff9645" 
                size="12" readonly allow-half/>
              </div>
            </div>
          </div>
          <!-- 上右 -->
          <div class="right">
            <template v-for="(item,index) in comment.subScores" :key="item">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
          <!-- 中间标签评价 -->
          <div class="tags">
            <template v-for="(item, index) in comment.commentTagVo" :key="index">
              <span class="item" 
                    :style="{ color: item.color, background: item.backgroundColor }">
                {{ item.text }}
              </span>
            </template>
          </div>
          <!-- 底部用户评论 -->
          <div class="content">
            <div class="user">
              <!-- 头像 -->
              <div class="avatar">
                <img :src="comment.comment.userAvatars" alt="">
              </div>
              <!-- 姓名日期 -->
              <div class="profile">
                <div class="name">{{ comment.comment.userName }}</div>
                <div class="date">{{ comment.comment.checkInDate }}</div>
              </div>
            </div>
            <!-- 具体评论 -->
            <div class="text">
              {{ comment.comment.commentDetail }}
            </div>
          </div>
        </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})

// 格式化名称
// const nameReg = /(.*?).(.*?)/i;//正则匹配
// const results = nameReg.exec(props.comment.overall);
// console.log(results);
// const getName = (name) => {
//   // return name.replace("：", "").replace("】", "").replace("【", "")
//   const results = nameReg.exec(name);
//   console.log(results);
//   //return results[1]
// }
</script>

<style lang="less" scoped>
.comment-inner {
  padding: 10px 0;

  .header {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .score {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;

        .text {
          font-size: 48px;
          position: relative;
          z-index: 9;
        }

        .line {
          width: 66px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          position: absolute;
          bottom: 6px;
          z-index: 5;
        }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .count {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;

      .item {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;

    .item {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  .content {
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatar {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .profile {
        margin-left: 8px;
        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>