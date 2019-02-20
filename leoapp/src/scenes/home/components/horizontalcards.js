import { Card, Col, Row,Icon,Avatar } from 'antd';
import React from 'react';
const { Meta } = Card;
const ContenedorCardsBrowser = () => {
  return(
    <div style={{ background: '#F0F0DF', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
      <Card      
    
      title="Registra tus viajes"
      cover={<img alt="example" src="https://yourtripssite.z19.web.core.windows.net/img/travel1.jpg"  />}
      extra={<a href="https://ant.design/components/list/">More</a>}
    >
      Registra tus viajes, las fechas y los lugares que visitados.
    </Card>
      </Col>
      <Col span={8}>
      <Card  
      cover={<img alt="example" src="https://yourtripssite.z19.web.core.windows.net/img/traveltime.jpg" />}
      title="Enumera tus proximos viajes"
      extra={<a href="https://ant.design/components/list/">More</a>}
    >
      Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.
    </Card>
      </Col>
      <Col span={8}>
      <Card  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
    </Row>
  </div>
  )

  }

  export {ContenedorCardsBrowser};