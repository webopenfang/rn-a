import axios from "axios";
import { getToken } from "./token";

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
    if (error.response && error.response.status === 401) {
      // 处理未授权的情况
      console.error("Unauthorized access - redirecting to login.");
      // 可以在这里添加重定向到登录页面的逻辑
    }
    return Promise.reject(error);
  }
);

export { request };
