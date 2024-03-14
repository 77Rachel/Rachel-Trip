import { getHomeCategories, getHomeHotSuggests, getHomeHouselist } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    // 别忘了头顶还有个引入才能使用请求
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houseList.push(...res.data);
      this.currentPage++;
    }
  }
})

export default useHomeStore
