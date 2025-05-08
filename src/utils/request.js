import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "../router";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
    // 在发送请求之前做些什么
  (config) => {
    // 注入token
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response.status === 401) {
      // 做token过期的处理
      removeToken();
      // 重新登录
      router.navigate("/login");
      // 强制刷新
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export { request };
