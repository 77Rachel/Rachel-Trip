import { getSearchTop,getSearchResult } from "@/services";
import { defineStore } from "pinia";

const useSearchStore = defineStore("search",{
  state: () => ({
    topList:[],
    resultList:[]
  }),
  actions: {
    async fetchTopListData(){
      const res = await getSearchTop();
      this.topList = res.data.data.allConditions || [];
    },
    async fetchSearchResult(){
      const res = await getSearchResult();
      this.resultList = res.data.data || {};
    }
  }
})

export default useSearchStore









