import { Outlet, useNavigate, Link } from "react-router-dom";
import Rudex from "@/components/Rudex";
import { useEffect } from "react";
import { request } from "@/utils";
const Layout = () => {
  const navigate = useNavigate();

useEffect(() => {
    request({
      url: "/user/profile",
      method: "get",
    })
  }, []);



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
