 <template>
   <div class="loading" 
   v-if="mainStore.isLoading"
   @click="loadingClick"
   >
     <div class="backImg">
      <div class="gif">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="">
      </div>
     </div>
   </div>
 </template>

 <script setup>

import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

// 点击消失
const loadingClick = () => {
  mainStore.isLoading = false;
}
 </script>
 
 <style lang="less" scoped>
 .loading{
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,.2);

  .backImg{
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img{
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
 }
 </style>