import React from 'react';
import { List, Avatar,Tabs } from 'antd';
import TextButtons from '../../../components/filtromenu';
import { TituloPrincipal } from '../../../components/estiloshtml';
import  PendingTimeLine  from '../components/timeline';

const TabPane = Tabs.TabPane;

class TabContainer extends React.Component {
  constructor(props){
    super(props);  
     
} 

eliminarPaisesDuplicados(trips)
   {
    const idPaises = new Set();
    const paisesVisitados = [];

    trips.forEach(trip => {      
       if(idPaises.has(trip.idPais) === false)
       {
          paisesVisitados.push(trip);
       }
      idPaises.add(trip.idPais);
      
     });
     return paisesVisitados;
   }
  render(){
    const paiseseSinduplicados =  this.eliminarPaisesDuplicados(this.props.data);
    return(
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Historia de tus viajes" key="1">
          <TituloPrincipal>El cronograma de tus viajes.</TituloPrincipal>                    
          <PendingTimeLine data={this.props.data}></PendingTimeLine>
        </TabPane>
        <TabPane tab="Lista países visitados" key="2">
           <TextButtons></TextButtons>                                            
            <TituloPrincipal>Has visitado {paiseseSinduplicados.length} países</TituloPrincipal>
            <List style={{ marginLeft:10 }}
                          itemLayout="horizontal"
                          loading={this.props.initLoading}
                          dataSource={paiseseSinduplicados}
                          renderItem={item => (
                            <List.Item>
                              <List.Item.Meta                    
                                avatar={<Avatar src={item.urlFlag} />}
                                title={<a href={"https://www.google.com/search?q=" + item.pais }   target="_blank" rel="noopener noreferrer">{item.pais}</a>}                                                       
                              />
                            </List.Item>                            
                          )}
                        />        
          </TabPane>          
       </Tabs>    
    );     
  }
}


export default TabContainer;