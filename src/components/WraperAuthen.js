import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer, } = Layout;


function WraperAuthen(props) {
  return (
    <Layout>
      <Content className="site-layout" style={{ padding:0 , marginTop: 0 }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}
export default WraperAuthen;