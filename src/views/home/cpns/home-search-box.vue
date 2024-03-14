<template>
  <div class="search-box">
    <!-- 城市展示&&选择 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 动态日期实现 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date-l">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
        <div class="end">
          <div class="date-r">
            <span class="tip">离店</span>
            <span class="time">{{ endDateStr }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 日期范围选择 -->
    <van-calendar 
    v-model:show="showCalendar" 
    type="range" 
    color="#ff9854" 
    :round="true" 
    :show-confirm="true" 
    confirm-disabled-text="请先选择日期喔" 
    @confirm="onConfirm"/>
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="price">价格不限</div>
      <div class="popularity">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section bottom-gray-line keyWord">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div class="item">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>

import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { ref,computed } from "vue";
import { useRouter } from "vue-router";
import useHomeStore from "@/stores/modules/home"
import useMainStore from "@/stores/modules/main";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";

const router = useRouter();

// 改变我的位置
const cityClick = () => {
  // 跳转到新的页面
  router.push("/city");
}

// 通过经纬度获取城市信息
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功:", res);
  }, err => {
    console.log("获取位置失败:", err);
  })
}

// 当前城市的动态获取
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);


// 日期范围的处理,从mainStore获取
const mainStore = useMainStore();
const { startDate,endDate } = storeToRefs(mainStore);

// 数据展示
const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value,endDate.value));

// 日期的范围选择
const showCalendar = ref(false)
const onConfirm = (value) => {
  //设置日期
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  // 修改store里面的值后计算,以全局使用
  mainStore.startDate = selectStartDate;
  mainStore.endDate = selectEndDate;
  stayCount.value = getDiffDays(selectStartDate,selectEndDate);
  //隐藏日历
  showCalendar.value = false;
  //console.log(showCalendar.value)
}

// 热门建议
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

//搜索按钮
const searchBtnClick = () => {
  router.push({
    path:"/search",
    query:{
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 7px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date-l {
    display: flex;
    flex-direction: column;
    transform: translate(-5px, 0);

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .date-r {
    display: flex;
    flex-direction: column;
    margin-left: 39px;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    margin-left: 60px;
  }
}

.price-counter {
  .price {
    position: relative;
    right: 5px;
  }
  .popularity{
    position: relative;
    left: 217px;
  }
}
.keyWord{
  position: relative;
  bottom: 9px;
  right: 5px;
}

.hot-suggests {
  transform: translate(0,-9px);
  height: auto;
  .item {
    color: rgb(63, 73, 84);
    background: rgb(241, 243, 245);
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background: var(--theme-linear-gradient);
  }
}
</style>