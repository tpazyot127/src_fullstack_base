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
const menu1 = (
  <Menu>
    <Menu.Item key="1" >
      Kiến Thức Tiểu Học
    </Menu.Item>
    <Menu.Item key="2" >
      Cách Dạy Con Học Toán
    </Menu.Item>
    <Menu.Item key="3" >
      Quần áo
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu >
    <Menu.Item key="1" icon={<UserOutlined />}>
      Đang Hoạt Động
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      Đang Chờ Duyệt
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      Bản Nháp
    </Menu.Item>
  </Menu>
);
const data = [
  {
    key: '1',
    title: 'Kiến thức tiểu học',
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  },
  {
    key: '2',
    title: "Cách dạy con học toán",
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  },
  {
    key: '3',
    title: 'MongoDB',
    desription: "",
    date: '2021/03/14 11:13',
    status: "Đang hoạt động"

  }

]

function ListPostCategories() {
  return (
    <WraperApp>
      <Row>
        <Col lg={6}>
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
            <Dropdown overlay={menu1}>
              <Button>
                Trống <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            <h3>Trạng Thái</h3>
            <Dropdown overlay={menu2}>
              <Button>
                Trạng Thái <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div>
            <Button type="primary" shape="round">Thêm mới</Button>
          </div>

        </Col>
        <Col lg={1}></Col>
        <Col lg={17}>
          <div>
            <h1>DANH MỤC BÀI VIẾT</h1>
            <Table dataSource={data}>
              <Column title="Tiêu Đề" dataIndex="title" key="title" />
              <Column title="Mô Tả" dataIndex="desription" key="desription" />
              <Column title="Ngày tạo" dataIndex="date" key="date" />
              <Column title="Trạng Thái" dataIndex="status" key="status" />
            </Table>
          </div>
        </Col>
      </Row>
    </WraperApp >
  )
}
export default ListPostCategories;

