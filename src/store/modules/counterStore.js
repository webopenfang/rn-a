import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  //   初始化state
  initialState: {
    counter: 0,
  },
  //   修改状态的方法 同步方法 支持直接修改
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    addToNum(state, action){
        state.counter += action.payload;
    }
  },
});

// 解构出来actionCreater函数
const { increment, decrement,addToNum } = counterStore.actions;

// 获取reducer
const reducer = counterStore.reducer;

// 以按需导出的方式导出actionCreater
export { increment, decrement ,addToNum};

// 导出reducer
export default reducer;
