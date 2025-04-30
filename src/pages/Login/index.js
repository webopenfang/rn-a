import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>login page</div>
      {/* a链接跳转 */}
      <Link to="/relist">跳转到列表页</Link>
      {/* 编程式导航 */}
      <button onClick={() => navigate("/relist?id=123&name=Lucas")}>跳转到列表页</button>
      <button onClick={() => navigate("/relist/001")}>跳转到列表页</button>
    </div>
  );
};

export default Login;
