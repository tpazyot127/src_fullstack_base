import WraperApp from 'components/WraperApp';
import { Table, Tag, Space } from 'antd';
import productImg from 'assets/images/testjpg.jpg';
import { Row, Col } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
import { Button, Tooltip } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Column } = Table;
const data = [
  {
    key: '1',
    image: { productImg },
    title: 'Sản phẩm 03',
    email: "luonghop.it@gmail.com",
    categories: 'Nội thất',
    date: "18-03-2021"
  },
  {
    key: '2',
    image: { productImg },
    title: 'Sản phẩm 02',
    email: "luonghop.it@gmail.com",
    categories: 'Nội thất',
    date: "18-03-2021"
  },
  {
    key: '3',
    image: { productImg },
    title: 'Bộ bàn ghế 04',
    email: "luonghop.it@gmail.com",
    categories: 'Nội thất',
    date: "18-03-2021"
  },
  {
    key: '4',
    image: { productImg },
    title: 'Bộ bàn ghế 05',
    email: "luonghop.it@gmail.com",
    categories: 'Nội thất',
    date: "18-03-2021"
  },
  {
    key: '5',
    image: { productImg },
    title: 'Sản phẩm 01',
    email: "luonghop.it@gmail.com",
    categories: 'Nội thất',
    date: "18-03-2021"
  },

];
function ListProducts() {
  return (
    <WraperApp>
      <Row>
        <Col lg={20}></Col>
        <Col lg={4}>
          <Link to="/product/add"><Button type="primary" shape="round" icon={<PlusOutlined />}>
            Thêm mới sản phẩm
          </Button></Link>
        </Col>
      </Row>
      <Table dataSource={data}>
        <Column title="Hình Ảnh" dataIndex="image" key="image" />
        <Column title="Tiêu đề" dataIndex="title" key="title" />
        <Column title="Tác giả" dataIndex="email" key="email" />
        <Column title="Danh mục" dataIndex="categories" key="categories" />
        <Column title="Ngày tạo" dataIndex="date" key="date" />
      </Table>
    </WraperApp>
  );
}
export default ListProducts