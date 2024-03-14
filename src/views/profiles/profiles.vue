<template>
  <div class="profiles">
    <van-nav-bar left-text="用户中心"/>
    <van-icon name="setting-o" size="20" />
    <van-icon name="service-o" size="20"/>
    <!-- 用户信息展示 -->
    <ProfilesUser />


  </div>
</template>

<script setup>
import ProfilesUser from "./profilesShow/profiles-user.vue";



// 返回




</script>

<style lang="less" scoped>
.profiles {
  :deep(.van-nav-bar__text) {
    font-weight: 700;
    font-size: 18px;
    color: #333;
    margin-left: 6px;
  }
  :deep(.van-icon){
    position: absolute;
    top: 14px;
    z-index: 5;
  }
  :deep(.van-icon-setting-o){
    right: 20px;
  }
  :deep(.van-icon-service-o){
    right: 56px;
  }




}
</style>