import WraperApp from 'components/WraperApp';
import { Menu, Dropdown, Button, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Column } = Table;
const { TextArea } = Input;
const menu = (
  <Menu>
    <Menu.Item key="1" >
      Nội thất
    </Menu.Item>
    <Menu.Item key="2" >
      Điện thoại
    </Menu.Item>
    <Menu.Item key="3" >
      Quần áo
    </Menu.Item>
  </Menu>
);
const data = [
  {
    key: '1',
    title: 'Nội thất',
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  },
  {
    key: '2',
    title: "Điện thoại",
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  },
  {
    key: '3',
    title: 'Quần áo',
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  }

]

function ListProductsCategories() {
  return (
    <WraperApp>
      <Row>
        <Col lg={18} push={6}>
          <div>
            <h1>DANH MỤC SẢN PHẨM</h1>
            <Table dataSource={data}>
              <Column title="Tiêu Đề" dataIndex="title" key="title" />
              <Column title="Mô Tả" dataIndex="desription" key="desription" />
              <Column title="Ngày tạo" dataIndex="date" key="date" />
              <Column title="Trạng Thái" dataIndex="status" key="status" />
            </Table>
          </div>
        </Col>
        <Col lg={6} pull={18}>
          <h1>Thêm mới danh mục
          </h1>
          <div>
            <h3>*Tiêu Đề</h3>
            <Input placeholder="Tiêu Đề" />
          </div>
          <div>
            <h3>Mô Tả</h3>
            <TextArea rows={2} />
          </div>
          <div>
            <h3>Danh Mục Cha</h3>
            <Dropdown overlay={menu}>
              <Button>
                Trống <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            <Button type="primary" shape="round">Thêm mới</Button>
          </div>
        </Col>
      </Row>
    </WraperApp>
  )
}
export default ListProductsCategories

