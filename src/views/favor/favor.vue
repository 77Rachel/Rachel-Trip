<template>
  <div class="favor">
    <!-- 顶部导航栏 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <!-- 右侧图标 -->
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
      <!-- 中间切换栏 -->
      <template #title>
        <van-tabs v-model:active="active" type="card" shrink>
          <van-tab v-for="item in titles" :title="item" />
        </van-tabs>
      </template>
    </van-nav-bar>
    <!-- 我的收藏,通过tabbar的active区分点击的是哪个 -->
    <div v-if="active === 0" class="favorList">
      <!-- activeName区分房屋房东 -->
      <van-tabs v-model:active="activeName">
        <!-- 房屋列表 -->
        <van-tab title="房屋" name="house">
          <div class="content">
            <!-- 遍历展示,发送请求,组件引用 -->
            <template v-for="(value, key, index) in favorAll" :key="index">
              <SearchListItem :item-data="value"></SearchListItem>
            </template>
          </div>
        </van-tab>
        <!-- 房东列表 -->
        <van-tab title="房东" name="landlord">
          <!-- 有值才显示列表 -->
          <div v-if="landlordlist.length" class="list"></div>
          <!-- 没有就展示另一个 -->
          <div v-else class="none">
            <img class="icon-no-data" src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
            <div class="text">暂无收藏</div>
            <div class="tips">
              点击
              <van-icon name="like" size="15" color="red" />
              即可收藏房东
            </div>
            <button class="btn" @click="onClickLeft">随便逛逛~</button>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 浏览历史 -->
    <div v-if="active === 1" class="historyList">
      <template v-for="(item, index) in historyList">
        <search-list-item :item-data="item"></search-list-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import SearchListItem from "@/components/search-list-item/search-list-item.vue";
import useFavorStore from "@/stores/modules/favor";
import { storeToRefs } from "pinia";
import { getHistoryAll } from "@/services/modules/favor";

const router = useRouter();
const FavorStore = useFavorStore();
const titles = ['我的收藏', '浏览历史'];
const active = ref(0);
const activeName = ref("hosue");
const landlordlist = ref([]);
const historyList = ref({});

// store获取并发请求拿数据
FavorStore.fetchAllFavorData();
const { favorAll } = storeToRefs(FavorStore);
// console.log(favorAll)

// 另一种那数据的方式,注意给空值
getHistoryAll().then(res => {
  historyList.value = res.data.data.items || [];
})

// 点击返回上一页
const onClickLeft = () => {
  router.go(-1);
}

</script>

<style lang="less" scoped>
.favor {
  .content {
    padding: 0px 0px 55px 0px;
  }
    .none {
      text-align: center;
      img {
        position: relative;
        width: 100%;
      }
      .text{
        font-size: 20px;
        font-weight: 700;
      }
      .tips{
        margin: 10px 0;
      }
      .btn{
        padding: 10px 40px;
        font-size: 16px;
        border-radius: 16px;
        color: white;
        background: #ff9645;
      }
    }
    .historyList{
      padding-bottom: 50px;
    }
}
</style>