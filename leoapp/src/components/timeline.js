import { Timeline, Icon } from 'antd';
import React from 'react';
class PendingTimeLine extends React.Component {
 


  render() {
    return (
      <div>
        <Timeline >
          <Timeline.Item>Tu primer viaje Venezuela 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
          Tu primer viaje a Cuba 2015-09-01          
          </Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>
          <Timeline.Item>Tu viaje Nardia 2015-09-01</Timeline.Item>          
          <Timeline.Item>Tu último viaje a SF USA 2015-09-01</Timeline.Item>
        </Timeline>
        
      </div>
    );
  }
}

export default PendingTimeLine;