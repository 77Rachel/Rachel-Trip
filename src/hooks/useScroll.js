import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';

export default function useScroll(elRef) {
  // 设定变量
  let el = window;
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  // 滚动函数
  const scrollListenerHandler = throttle(() => {
    // 根据滚动目标的不同返回对应滚动的值
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
      //console.log(clientHeight.value,scrollTop.value,scrollHeight.value,1);
    }else{
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
      //console.log(clientHeight.value,scrollTop.value,scrollHeight.value);
    }

    // console.log("正在滚动");
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      //console.log("滚动到底部了");
      // 封装后不能写死,改为调用通用函数执行不同功能
      isReachBottom.value = true;
    }
  }, 200)

  // 挂载后直接监听
  onMounted(() => {
    // 如果elRef有值则改变el指向对应元素
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler);
  })

  // 卸载后移除监听,确保不与其它回调冲突
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  })

  // 返回结果
  return {
    isReachBottom,
    clientHeight,
    scrollHeight,
    scrollTop
  }
}
