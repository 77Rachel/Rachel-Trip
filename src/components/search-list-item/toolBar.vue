<template>
  <div class="toolBar">
    <div class="avatar">
      <img :src="toolData.logoUrl" alt="">
    </div>
    <div class="icon">
      <div class="icon-heart">
        <van-icon name="like" size="25" color="red" />
      </div>
      <div class="icon-comment">
        <van-icon name="comment-o" size="25" color="white">
        </van-icon>
        {{ toolData.allActiveAndRedPacket.totalReduceAmount }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  toolData: {
    type: Object,
    default: () => { }
  }
})

//  console.log(props.toolData)
</script>

<style lang="less" scoped>
.toolBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .avatar {
    img {
      width: 40px;
      height: 40px;
      border-radius: 30px;
    }
  }
  .icon{
    text-align: center;
    .icon-heart{
      margin: 15px 0 10px 0;
    }
    .icon-comment{
      font-weight: 700;
      color: bisque;
    }
  }
}
</style>