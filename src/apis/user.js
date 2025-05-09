// 用户相关的所有请求
import { request } from "@/utils/request";

// 登录
export function LoginApi(params) {
  return request({
    url: "/authorizations",
    method: "POST",
    data: params,
  });
}

// 获取用户信息
export function getProfileApi() {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}
