<template>
  <div class="orderItem">
    <template v-for="(item, index) in orderItem" :key="index">
      <div class="block">
        <div class="head">
          <div class="title">
            {{ item.unitName }}
          </div>
          <van-tag class="state" :color="item.orderStatusDescColor">
            {{ item.orderStatusDesc }}
          </van-tag>
          <span class="cancel" v-if="item.cancelReasonDesc">
            {{ item.cancelReasonDesc }}
          </span>
        </div>
        <div class="content">
          <div class="background">
            <img :src="item.unitPicture" alt="">
          </div>
          <div class="date">
            <div class="start">
              <div class="detailDate">
                {{ formatMonthDay(item.checkInDate) }}
              </div>
              <div class="detail">
                {{ getWeekDay(item.checkInDate) }}
                {{ item.checkInLatestTime }}
              </div>
            </div>
            <div class="arrow">>>>></div>
            <div class="end">
              <div class="detailDate">
                {{ formatMonthDay(item.checkOutDate) }}
              </div>
              <div class="detail">
                {{ getWeekDay(item.checkOutDate) }}
                {{ item.checkOutLatestTime }}
              </div>
            </div>
            <div class="line">|</div>
            <div class="price">
              支付总价
              <div class="number">
                ¥ {{ item.prepayAmount }}
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="status" v-if="item.orderStatus === 1">
            <div class="countDown">
              <img class="icon-time" src="@/assets/img/order/icon-time.png" alt="" />
              <OrderCountDown :order-count-down="item.countdown"></OrderCountDown>
            </div>
            <OrderBtn :order-btn="item"></OrderBtn>
          </div>
          <div class="status" v-if="item.orderStatus === 5">
            <OrderBtn :order-btn="item"></OrderBtn>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { formatMonthDay, getWeekDay } from "@/utils/format_date";
import OrderCountDown from "./order-countDown.vue";
import OrderBtn from "./order-btn.vue";

const props = defineProps({
  orderItem: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.orderItem {
  .block {
    background: white;
    margin: 12px 0;
    padding: 0 15px;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0 8px 0;

      .title {
        max-width: 250px;
        font-size: 14px;
        font-weight: 600;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .state {
        height: 24px;
        width: 60px;
        font-size: 17px;
        box-sizing: border-box;
        border-radius: 7px;
        padding: 2px 1px 2px 2px;
        margin-right: 4px;
      }

      .cancel {
        height: 24px;
        width: 60px;
        font-size: 10px;
        transform: translate(-6px, 10px);
        white-space: nowrap;
      }
    }

    .content {
      position: relative;

      .background {
        img {
          width: 100%;
          border-radius: 6px;
        }
      }

      .date {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        height: 60px;
        background: rgba(9, 10, 14, 0.7);
        border-radius: 6px;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;

        .start {
          margin-left: 5px;
        }

        .detailDate {
          font-size: 17px;
        }

        .detail {
          text-align: center;
          font-size: 11px;
          color: azure;
        }

        .arrow {
          font-size: 16px;
          font-weight: 700;
          color: #ff9654;
        }

        .line {
          transform: scale(2.5);
          padding-bottom: 3px;
        }

        .price {
          font-size: 15px;
          text-align: center;
          margin-right: 4px;

          .number {
            color: #ff9854;
          }
        }
      }
    }
  }

  .bottom {
    .status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 5px 0 3px;
      padding-bottom: 15px;

      .countDown {
        display: flex;

        img {
          width: 15px;
          height: 15px;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>