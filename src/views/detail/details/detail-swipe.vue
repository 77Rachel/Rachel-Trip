<template>
  <div class="swip">
    <!-- 使用组件的轮播图 -->
    <van-swipe class="swip-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <!-- 作用域插槽 -->
      <template #indicator="{ active,props }">
        <div class="indicator">
          <!-- 遍历对象 -->
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <!-- 轮播细节:对应图片显示对应小标题
                实现:动态添加class,判断当前图片类别 == key(enumPictureCategory) -->
            <span 
            class="item"
            :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <!-- 每组首元素下的标题  -->
                <span class="text">{{ getName(value[0].title) }}</span>
              <!-- 具体 当前展示 / 总x张 -->
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCatrgoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

// 自定义props传入展示数据
const props = defineProps({
  swipeData:{
    type: Array,
    default: () => []
  }
})

const swipeGroup = {};

for(const item of props.swipeData){
  // 拿到以item.enumPictureCategory为键,item对象为值的数组
  // "2":[]
  // "4":[]
  // ...
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    // 第一次拿到的并非数组,因此直接赋值一个数组过去保证有值
    valueArray = [];
    // 将拿到的[]返回到swipeGroup实现分类
    // {
    // 2:[{},{},{}]...,
    // 4:[{},{},{}]...,
    // ....
    // }
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  // 最后插入item对象数据
  valueArray.push(item);
}

// 拿到当前展示的索引
const getCatrgoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory];
  // 返回当前图片的索引
  return valueArray.findIndex(data => data === item) + 1
}

// 格式化名称
const nameReg = /【(.*?)】/i;//正则匹配
const getName = (name) => {
  // return name.replace("：", "").replace("】", "").replace("【", "")
  const results = nameReg.exec(name);
  return results[1]
}


</script>

<style lang="less" scoped>

.item{
  img{
    width: 100%;
  }
}

.indicator{
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0,0,0,0.1);

  .item{
    font-size: 12px;
    color: #fff;
    margin-right: 5px;

    &.active {
      padding: 0 3px;
      border-radius: 5px;
      background-color: #fff;
      color: #333;
    }
  }
}
</style>