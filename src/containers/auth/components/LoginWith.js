import { Layout, Menu, Breadcrumb } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
import { GooglePlusOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer, } = Layout;


function LoginWith(props) {
  return (
    <div>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10} className='login-from'>
          <Button type="dashed" block shape="round" icon={<FacebookOutlined />} >
            Đăng Nhập qua facebook
          </Button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={10} className="login-from">
          <Button danger block shape="round" icon={<GooglePlusOutlined />}>
            Đăng nhập qua gmail
          </Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
}
export default LoginWith;