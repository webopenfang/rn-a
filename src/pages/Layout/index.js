// 使用二级路由
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo,clearUserInfo } from "@/store/modules/user";
import { Layout, Menu, Button, Popconfirm } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content } = Layout;
const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: "首页",
  },
  {
    key: "/board",
    icon: <FileTextOutlined />,
    label: "文章管理",
  },
  {
    key: "/about",
    icon: <EditOutlined />,
    label: "创建文章",
  },
];
const Layouts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const name = useSelector((state) => state.user.useInfo.name);

  const onMenuClick = (e) => {
    console.log(e, e.key);
    navigate(e.key);
  };

  const location = useLocation();
  console.log(location.pathname);

  const confirmLogout = () => {
    dispatch(clearUserInfo());
    navigate("/login");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 侧边栏 */}
      <Sider width={200} style={{ background: "#001f3f" }}>
        <div className="logo">方大大的实验平台</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={(e) => {
            onMenuClick(e);
          }}
          style={{ background: "#001f3f", borderRight: 0 }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} style={item.style}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      {/* 主体内容 */}
      <Layout>
        {/* 顶部栏 */}
        <Header
          style={{
            background: "#001f3f",
            color: "#fff",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "16px" }}>{name}</span>
          <Button
            type="link"
            icon={<LogoutOutlined />}
            style={{ color: "#fff" }}
            onClick={() => {}}
          >
            <Popconfirm title="是否确认退出？" okText="确认" cancelText="取消" onConfirm={confirmLogout}>
              <Button type="primary">退出</Button>
            </Popconfirm>
          </Button>
        </Header>

        {/* 内容区 */}
        <Content style={{ margin: 0, padding: "24px", background: "#f5f5f5" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>

    // <div>
    //   一级路由layout
    //   <Link to="/about">关于</Link>
    //   <button onClick={() => navigate("/")}>面板</button>
    //   <Outlet />
    //   <Rudex />
    // </div>
  );
};

export default Layouts;
