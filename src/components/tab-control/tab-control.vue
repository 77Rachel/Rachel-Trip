<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

// 父传子,接收父组件传递的方法
const emits = defineEmits(['tabItemClick']);
const currentIndex = ref(0);

const itemClick = (index) => {
  currentIndex.value = index;
  // 触发传递的方法
  emits('tabItemClick',index);
}

// 设置选中状态的索引
const setIndex = (index) => {
  currentIndex.value = index;
}

// 导出供外界使用
defineExpose({
    setIndex,
    currentIndex
  });

</script>

<!-- <script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ["tabItemClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("tabItemClick", index)
      }
    }
  }
</script> -->

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  color: var(--primary-color);
  font-weight: 700;
}

.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color);
  padding: 8px;
}
</style>

