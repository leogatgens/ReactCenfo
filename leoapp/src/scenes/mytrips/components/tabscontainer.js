import React from 'react';
import { List, Avatar,Tabs } from 'antd';



const TabPane = Tabs.TabPane;

class TabContainer extends React.Component {
  constructor(props){
    super(props);  
     
} 


  render(){
    
    return(
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Historia de tus viajes" key="1">
         
        </TabPane>
        <TabPane tab="Lista países visitados" key="2">
           
          </TabPane>          
       </Tabs>    
    );     
  }
}


export default TabContainer;