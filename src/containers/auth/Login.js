import { Input, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AuthChoose from './components/AuthChoose'
import LoginWith from './components/LoginWith'
import { Form, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import WraperAuthen from 'components/WraperAuthen'
import logo from 'assets/images/Xiaomi.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8} className='login-form'>

          <Form name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="user-email"
              rules={[{ required: true, message: "Hãy Nhập E-Mail" }]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Hãy Nhập Mật Khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật Khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block shape="round" htmlType="submit" className="login-form-button">
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
          <LoginWith />
          <AuthChoose />
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
};

function Login() {
  return (
    <WraperAuthen>
      <div className="app-auth">
        <div className="logo">
          <img src={logo} />
        </div>
        <div >
          <NormalLoginForm />
        </div>
      </div>
    </WraperAuthen>
  );
}

export default Login;