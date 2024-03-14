import { getFavorAll } from "@/services/modules/favor";
import { defineStore } from "pinia";

const useFavorStore = defineStore("favor",{
  state: () => ({
    favorAll:{}
  }),
  actions: {
    async fetchAllFavorData() {
      const res = await getFavorAll();
      this.favorAll = res.data.data.items || [];
    }
  }
})

export default useFavorStore









