import { Input, } from 'antd';
import { Button } from 'antd';
import AuthChoose from './components/AuthChoose'
import { Row, Col } from 'antd';
import { Form, } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import WraperAuthen from 'components/WraperAuthen'
import logo from "assets/images/Xiaomi.png"
import { Alert } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const validateMessages = {
    types: {
      email: '${label} is not a valid email!',
    },
  }

  return (
    <div >
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <div className="login-form">
            <div>
            <Alert message="Bạn vui lòng nhập e-mail, chúng tôi sẽ gửi link cập nhật mật khẩu qua e-mail." type="info" closeText="Đóng" />
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="user-email"
                rules={[
                  { required: true, message: "Hãy Nhập E-Mail" },
                  { type: 'email', message: "Không Đúng Định Dạng E-Mail" },
                ]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" shape="" htmlType="submit" className="ForgotPw-button">
                  Khôi Phục Mật Khẩu
                </Button>
              </Form.Item>
              <AuthChoose />
            </Form>
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

function ForgotPw() {
  return (
    <WraperAuthen>
      <div className="app-auth">
        <div className="logo">
          <img src={logo} />
        </div>
        <div >
          <ForgotPassword />
        </div>
      </div>
    </WraperAuthen>
  );
}
export default ForgotPw;