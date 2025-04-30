import { Outlet, useNavigate, Link } from "react-router-dom";
import Rudex from "../../componets/Rudex";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      一级路由layout
      <Link to="/about">关于</Link>
      <button onClick={() => navigate("/")}>面板</button>
      <Outlet />
      <Rudex />

    </div>
  );
};

export default Layout;
