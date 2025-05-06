// 组件通信，父传子，子传父，跨层级传递
import PropTypes from "prop-types"; // 引入 prop-types 库
import { useState, createContext, useContext } from "react";

// 子组件 SonA
function SonA(props) {
  const children = "this is a SonA component";

  return (
    <div>
      <div>
        {props.name}
        {props.chat}
      </div>
      <div> {props.children}</div>
      {/* 子传父 */}
      {/* 在子组件中调用父组件并传递参数 */}
      <button onClick={() => props.childrenClick(children)}>SonA组件</button>
    </div>
  );
}
// 添加 props 类型校验
SonA.propTypes = {
  name: PropTypes.string.isRequired, // 声明 name 必须是字符串且为必填项
  chat: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  childrenClick: PropTypes.func.isRequired,
};

// 子组件 SonB
function SonB(props) {
  const children = "this is a SonB component";
  return (
    <div>
      <div> {props.name}</div>
      <button onClick={() => props.childrenClick(children)}>SonB组件</button>
      <SonC />
    </div>
  );
}
SonB.propTypes = {
  name: PropTypes.string.isRequired,
  childrenClick: PropTypes.func.isRequired,
};

// 孙组件 SonC
// 跨层级传递(模拟爷孙传递)
const MsgContext = createContext();
function SonC() {
  const children = "this is a SonC component";
  const MsgSonC = useContext(MsgContext);
  return (
    <div>
      <div>
        {children},{MsgSonC}
      </div>
      <button>SonC组件</button>
    </div>
  );
}
SonC.propTypes = {};

// 父组件
function Communication() {
  const lab = "父组件";
  const [name, setName] = useState("parent");
  const parentClick = (name) => {
    console.log(name);
    setName(name);
  };
  return (
    <div>
      <h1>组件通信</h1>
      <div>{lab}</div>
      <div>{name}</div>
      <SonA
        name={name}
        chat={<span>this is a chat</span>}
        childrenClick={parentClick}
      >
        {/* <div>this is a child component</div> */}
      </SonA>

      <MsgContext.Provider value={lab}>
        <SonB name={name} childrenClick={parentClick} />
      </MsgContext.Provider>
    </div>
  );
}

export default Communication;
