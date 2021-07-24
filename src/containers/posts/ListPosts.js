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
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getPosts } from 'redux/posts/action';
import { getPost } from 'redux/posts/action';
import { List, Avatar } from 'antd';
import { API_URL } from 'config/config'


function ListPosts() {
  const postsData = useSelector(state => state.posts);
  const dispatch = useDispatch();
  console.log('postsData', postsData.list.data);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
 
  return (
    <WraperApp>
      <Row>
        <Col lg={20}></Col>
        <Col lg={4}>
          <Link to="/post/add"><Button type="primary" shape="round" icon={<PlusOutlined />}>
            Thêm mới bài viết
          </Button></Link>
        </Col>
      </Row>
      <div class="list-post-table">
        <Row>
          <Col lg={24}>
            <List
              dataSource={postsData.list.data}
              itemLayout="horizontal"
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`${API_URL}/${item.image}`} />}
                    title={<Link to="/post/add">{item.title}</Link>}
                    description={item.body}
                  />
                </List.Item>
              )}
            />,
          </Col>
        </Row>
      </div>
    </WraperApp>
  );
}
export default ListPosts;