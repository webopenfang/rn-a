import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channels: [],
  },
  reducers: {
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
  },
});

// 异步请求部分
const { setChannels } = channelSlice.actions;

const fetchChannels = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};

export { fetchChannels };

// 导出reducer
export const channelReducer = channelSlice.reducer;
