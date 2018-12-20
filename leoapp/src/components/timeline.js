import { Timeline, Icon } from 'antd';
import React from 'react';
class PendingTimeLine extends React.Component {
 


  render() {
    return (
      <div>
        <Timeline >
          <Timeline.Item>Tu primer viaje Venezuela 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        
      </div>
    );
  }
}

export default PendingTimeLine;