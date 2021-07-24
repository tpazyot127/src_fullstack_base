import WraperApp from 'components/WraperApp';
import Map from './components/Map';
import { Row, Col } from 'antd';
import { Statistic, Card, } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { List, Avatar } from 'antd';
import { Input } from 'antd';
import HomeChart from 'containers/home/components/HomeChart'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
  FundProjectionScreenOutlined,
  ReloadOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { RangePicker } = DatePicker;
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function Home() {
  return (
    <WraperApp>
      <div className="home-report">
        <Row>
          <Col span={6}><h2>General Report</h2></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}><Button type="link" icon={<ReloadOutlined />}>Reload Data</Button></Col>
        </Row>
        <Row>
          <Col span={6}>
            <div className="site-statistic-card">
              <Card>
                <Statistic
                  title="Item Sales"
                  value={33}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ShoppingCartOutlined />}
                  suffix="Item"
                />
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-statistic-card">
              <Card>
                <Statistic
                  title="New Oders"
                  value={3721}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<WalletOutlined />}
                  suffix=" New Oders"
                />
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-statistic-card">
              <Card>
                <Statistic
                  title="Active"
                  value={2149}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<FundProjectionScreenOutlined />}
                  suffix="Total Products"
                />
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-statistic-card">
              <Card>
                <Statistic
                  title="Active"
                  value={152040}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={< UserOutlined />}
                  suffix="Visitor"
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <div className="clear"></div>
      <div className="home-chart">
        <Row>
          <Col span={10}>
            <div className="sale-report">
              <Row>
                <Col span={8}><h2>Sales Report</h2></Col>
                <Col span={8}></Col>
                <Col span={8}>
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      dateRender={current => {
                        const style = {};
                        if (current.date() === 1) {
                          style.border = '1px solid #1890ff';
                          style.borderRadius = '50%';
                        }
                        return (
                          <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                          </div>
                        );
                      }}
                    />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Progress percent={30} />
                  <Progress percent={50} status="active" />
                  <Progress percent={70} status="exception" />
                  <Progress percent={100} />
                  <Progress percent={50} showInfo={false} />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={7}>
            <div className="weekly-top-seller">
              <Row>
                <Col span={24}>
                  <Row>
                    <Col span={10}><h4>Weekly Top Seller</h4></Col>
                    <Col span={2}></Col>
                    <Col span={2}><Button type="link">Show More</Button></Col>
                  </Row>
                </Col>
                <Row>
                  <Col span={24}>
                    <div className="home-chart">
                      <HomeChart />
                    </div>
                    <ul>
                      <li>17 - 30 Years old</li>
                      <li>31 - 50 Years old</li>
                      <li> 50 Years old</li>
                    </ul>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
          <Col span={7}>
            <div className="sale-more-report">
              <Row>
                <Col span={24}>
                  <Row>
                    <Col span={8}><h4>Sale Report</h4></Col>
                    <Col span={2}></Col>
                    <Col span={2}><Button type="link">Show More</Button></Col>
                  </Row>
                </Col>
                <Row>
                  <Col span={24}>
                    <div className="home-chart">
                      <HomeChart />
                    </div>
                    <ul>
                      <li>17 - 30 Years old</li>
                      <li>31 - 50 Years old</li>
                      <li> 50 Years old</li>
                    </ul>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="clear"></div>
      <div className="home-info">
        <Row>
          <Col span={14}>
            <div className="official-store">
              <Row>
                <Col span={8}><h2>Official Store</h2></Col>
                <Col span={8}></Col>
                <Col span={8}>
                  <Space direction="vertical">
                    <Input placeholder="Filter By City" prefix={<EnvironmentOutlined />} />,
                  </Space>,
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Progress percent={30} />
                  <Progress percent={50} status="active" />
                  <Progress percent={70} status="exception" />
                  <Progress percent={100} />
                  <Progress percent={50} showInfo={false} />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={2}>

          </Col>
          <Col span={8}>
            <Row>
              <Col span={14}><h2>Weekly Best Sellers</h2></Col>
              <Col span={10}></Col>
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />,
            <Button block>View More</Button>
          </Col>
        </Row>
      </div>
    </WraperApp>
  )
}

export default Home