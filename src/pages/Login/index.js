import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    // 触发异步请求
    await dispatch(fetchLogin(values));
    navigate("/");
    message.success("登录成功！");
  };
  return (
    <div>
      <Card title="登录">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[{ required: true, message: "请输入手机号！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="code"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div>
        <Link to="/relist">跳转到列表页</Link>
      </div>
      {/* 编程式导航 */}
      <button onClick={() => navigate("/relist?id=123&name=Lucas")}>
        跳转到列表页
      </button>
      <button onClick={() => navigate("/relist/001")}>跳转到列表页</button>
    </div>
  );
};

export default Login;
