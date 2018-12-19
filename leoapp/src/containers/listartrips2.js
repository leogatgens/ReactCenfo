import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'España',
  },
  {
    title: 'Portugal',
  },
  {
    title: 'Francia',
  },
  {
    title: 'Inglaterra',
  },
];

const LoadMoreList = (props) =>{
  return (
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
  />
    )
  }
  
  export {LoadMoreList};