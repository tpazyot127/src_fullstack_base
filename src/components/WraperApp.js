import { Layout, Menu, Breadcrumb } from 'antd';
import "assets/css/style.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,  
  UploadOutlined,
  HomeOutlined 
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Sider, Footer, } = Layout;

function WraperApp(props) {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<HomeOutlined  />}>
            <Link to='/'>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to='/posts'>Trang Bài Viết</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to='/products'>Trang Sản Phẩm</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to='/login'>Đăng Nhập</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};

export default WraperApp;