import Login from "../pages/Login";
import ReList from "../pages/ReList";
import Layout from "../pages/Layout";
import Board from "../pages/Board";
import About from "../pages/About";
import NotFoundPage from "@/pages/NotFound";

import { createBrowserRouter } from "react-router-dom";

// 创建router实例对象并且配置路由对应关系
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // 默认二级路由
      {
        index: true,
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/relist/:id",
    element: <ReList />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default router;
