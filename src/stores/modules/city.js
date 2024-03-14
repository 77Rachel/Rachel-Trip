import { getCityAll } from "@/services";
import { defineStore } from "pinia";

// 使用pinia发送网络请求
const useCityStore = defineStore("city",{
  state: () => ({
    // 管理的对象
    allCities:{},
    currentCity:{
      cityName:"广州"
    }
  }),
  actions:{
    // 行为是发送请求并获取
    async fetchAllCitiesData(){
      const res = await getCityAll();
      this.allCities = res.data;
    }
  }
})

export default useCityStore