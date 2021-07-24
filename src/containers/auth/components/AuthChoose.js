import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer, } = Layout;


function AuthChoose() {
  return (
    <Row>
      <Col span={24} >
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/login">Đăng nhập</Link>  
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/register">Đăng kí</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/forgotpw">Quên mật khẩu</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Tiếng Anh</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Tiếng Việt</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Col>
    </Row>
  );
}
export default AuthChoose;