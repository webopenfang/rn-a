import { useState, useRef } from "react";
import _ from "lodash";
// 定义组件
function Button(props) {
  return <button>组件</button>;
}

const BtnStyle = {
  fontSize: "20px",
};

function One() {
  const [list, setList] = useState([
    { id: 1001, name: "vue" },
    { id: 1004, name: "React" },
    { id: 1003, name: "Angular" },
    { id: 1002, name: "Ember" },
  ]);
  const handleClick = (item, e) => {
    console.log(item, e);
    setList([...list, { id: Math.random(), name: item }]);
  };

  const handleDelete = (name) => {
    setList(list.filter((item) => item.name !== name));
  };

  const handleChange = () => {
    setList(_.orderBy(list, "id", "asc"));
  };

  const [name, setName] = useState("方大大");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    console.log(e, inputRef.current.value);
    setList([...list, { id: Math.random(), name: inputRef.current.value }]);
    //清空
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <ul style={{ display: "flex" }}>
        {list.map((item) => (
          <div key={item.id} style={{ margin: "10px" }}>
            <li> {item.id}</li>
            <li style={{ color: "blue" }}>{item.name}</li>
            {item.name === "React" && (
              <button onClick={() => handleDelete(item.name)}>删除</button>
            )}
          </div>
        ))}
      </ul>
      <button
        onClick={(e) => handleClick("哈哈哈哈哈哈哈哈哈哈哈", e)}
        // style={{ backgroundColor: "red" }}
        style={BtnStyle}
      >
        Add Item
      </button>
      <button onClick={() => handleChange()}>排序</button>

      {/* 使用组件 */}
      <Button />

      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
      ></input>
      <input ref={inputRef} type="text"></input>
      <button
        onClick={(e) => {
          handleInputChange(e);
        }}
      >
        获取input的值
      </button>
    </div>
  );
}

export default One;
