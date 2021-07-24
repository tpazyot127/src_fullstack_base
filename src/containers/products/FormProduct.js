import WraperApp from 'components/WraperApp';
import { Input } from 'antd';
import { UnorderedListOutlined } from "@ant-design/icons";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { TextArea } = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



function FormProducts() {
  return (
    <WraperApp>
      <Row>
        <Col lg={16}>
          <h1>Thêm Mới Sản Phẩm</h1>
        </Col>
        <Col lg={8}>
          <div className="product-button">
            <Link to="/product_categories"><Button type="primary" icon={<UnorderedListOutlined />}>Danh sách sản phẩm</Button></Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={16}>
          <div>
            <h3>*Tiêu Đề</h3>
            <Input placeholder="Tiêu Đề" />
          </div>
          <div>
            <h3>Mô Tả</h3>
            <TextArea rows={5} />
          </div>
        </Col>
        <Col lg={8}>
          <div>
            <h2>Thêm Ảnh</h2>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </Col>
      </Row>
    </WraperApp>
  );
}
export default FormProducts;
