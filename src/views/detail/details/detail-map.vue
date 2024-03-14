<template>
  <div class="map">
    <DetailSection title="位置周边" moreText="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
import { onMounted, ref } from "vue";

// 自定义传入值
const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

// 绑定一个ref
const mapRef = ref();

// 挂载时创建地图
onMounted(() => {
  // 地图实例 
  var map = new BMapGL.Map(mapRef.value);
  // 创建点坐标 
  var point = new BMapGL.Point(props.position.longitude, props.position.latitude);
  // 初始化地图，设置中心点坐标和地图级别
  map.centerAndZoom(point, 15);
  // 自定义地图标注
  var myIcon = new BMapGL.Icon("src/assets/img/map.jpg", new BMapGL.Size(23, 25), {
    // 指定定位位置
    anchor: new BMapGL.Size(10, 25),
    // 设置图片偏移
    imageOffset: new BMapGL.Size(0,0)
  });
  // 创建标注对象并添加到地图  
  var marker = new BMapGL.Marker(point, {icon: myIcon}); 
  map.addOverlay(marker);

})

</script>

<style lang="less" scoped>
.baidu {
  height: 250px;
}
</style>