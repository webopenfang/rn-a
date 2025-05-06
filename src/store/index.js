// 组合redux子模块+导出store实例
import { configureStore } from "@reduxjs/toolkit";

// 导入子模块reducer
import counterReducer from "./modules/counterStore";
import { channelReducer } from "./modules/channelStore";
import userReducer from "./modules/user";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    user: userReducer,
  },
});

export default store;
