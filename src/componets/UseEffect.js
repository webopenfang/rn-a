import React, { useState, useEffect } from "react";

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useEffect: 定时器");
    }, 1000);
    return () => {
        // 清除副作用（组件卸载时）
      clearInterval(timer);
    };
  }, []);
}

function UseEffect() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  //   添加特定依赖项count:组件初始渲染+特性依赖项变化时执行
  useEffect(() => {
    console.log("添加特定依赖项count:组件初始渲染+特性依赖项变化时执行");
    document.title = `You clicked ${count} times`;
  }, [count]);

  //   没有依赖项：组件初始渲染+组件更新时执行
  useEffect(() => {
    console.log("没有依赖项：组件初始渲染+组件更新时执行");
  });

  //   依赖项为空数组:只在初始渲染时执行一次
  useEffect(() => {
    console.log("依赖项为空数组:只在初始渲染时执行一次");
  }, []);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {show && <Son />}
      <button onClick={() => setShow(false)}>控制组件隐藏显示</button>
    </div>
  );
}

export default UseEffect;
