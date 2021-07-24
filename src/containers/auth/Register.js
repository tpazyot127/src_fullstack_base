import { Input, } from 'antd';
import LoginWith from './components/LoginWith'
import { MailOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import AuthChoose from './components/AuthChoose'
import { Form, Radio } from 'antd';
import WraperAuthen from 'components/WraperAuthen'
import logo from 'assets/images/Xiaomi.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const RegisterFrom = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const validateMessages = {
    types: {
      email: '${label} is not a valid email!',
    },
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8} className='login-form'>
          <Form name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="user"
              rules={[{ required: true, message: "Hãy Nhập Họ Tên" }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Họ và Tên" />
            </Form.Item>
            <Form.Item
              name="user-email"
              hasFeedback
              rules={[
                { required: true, message: "Hãy Nhập E-Mail" },
                { type: 'email', message: "Không Đúng Định Dạng E-Mail" },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[{ required: true, message: 'Hãy Nhập Mật Khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật Khẩu"
              />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Hãy Nhập Mật Khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Không Khớp Mật Khẩu!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Xác Nhận Mật Khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block shape="" htmlType="submit" className="Register-form-button">
                Đăng Kí
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

function Register() {
  return (
    <WraperAuthen>
      <div className="app-auth">
        <div className="logo">
          <img src={logo} />
        </div >
        <div >
          <RegisterFrom />
        </div>
      </div>
    </WraperAuthen>

  );
}
export default Register;