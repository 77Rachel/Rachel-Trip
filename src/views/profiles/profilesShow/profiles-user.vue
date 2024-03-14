<template>
  <div class="user">
    <div class="userShow">
      <div class="userBackground">
        <img src="@/assets/img/profiles/backgroundTest.png">
        <div class="userData">
          <div class="avatar">
            <img src="@/assets/img/profiles/avatarTest.jpg">
          </div>
          <div class="text">
            <span class="name">Rachel</span>
            <span class="sign">hi~aaaaaaaaaaaaaa</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.user {
  .userShow {
    
    .userBackground {
      margin: 15px 15px;
      
      
      img {
        border-radius: 15px;
        width: 100%;
      }
      .userData {
        display: flex;
        width: 90%;
        position: absolute;
        top: 182px;
        border-radius: 15px;
        padding: 8px 0 10px 8px;
        background-color: rgba(217, 211, 211, 0.5);
        .avatar {
          img {
            border: 1px solid #666;
            width: 54px;
            height: 54px;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          margin-left: 12px;
          margin-top: 9px;
          .name{
            font-weight: 700;
            font-size: 18px;
          }
          .sign{
            padding-top: 2px;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>