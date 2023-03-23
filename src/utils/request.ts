import axios from "axios";
import { useUserStore } from "@/stores";
import router from "@/router";

const userStore = useUserStore();
const instance = axios.create({
  //   baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const { token } = userStore;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("请求拦截器！", error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      userStore.token = response.data.token;
    }
    return Promise.resolve(response.data); // 可有可无，axios会自动包装
  },
  async (error) => {
    // 如果身份失效，则跳转到登录页
    if (error.response.status == 401) {
      userStore.$reset();
      await router.replace({ name: "Layout" }); // 不能在vue-router模块中重新导入，必须通过已经实例化的router来获取
    }
    // 抛出错误导致控制台报红，把请求失败结果封装到失败Promise,让接口捕获、处理
    if (!error.response.data) {
      return Promise.reject({
        statusCode: 500,
        message: "服务器错误!",
      });
    }
    return Promise.reject(error.response.data);
  }
);

export default instance;
