import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 通过拦截器设置加载中状态
    this.instance.interceptors.request.use(config => {
      // 加载中则显示
      mainStore.isLoading = true;
      return config;
    }, err => {
      return err;
    })
    this.instance.interceptors.response.use(res => {
      // 加载结束消失
      mainStore.isLoading = false;
      return res;
    }, err => {
      // 无论加载结果如何都要消失
      mainStore.isLoading = false;
      return err;
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)


