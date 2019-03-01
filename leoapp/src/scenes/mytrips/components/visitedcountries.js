import { List, Avatar,Tabs } from 'antd';
import TextButtons from '../../../components/filtromenu';
import React from 'react';
import { TituloPrincipal } from '../../../components/estiloshtml';


function eliminarPaisesDuplicados(trips)
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
const ContriesListTab = (props) =>{
    console.log(props);
    if(props.data === null)
        return  null; 
    const paiseseSinduplicados =  eliminarPaisesDuplicados(props.data);
    
        return (
            <div>
        <TextButtons></TextButtons>                                            
        <TituloPrincipal>Has visitado {paiseseSinduplicados.length} países</TituloPrincipal>
        <List style={{ marginLeft:10 }}
                    itemLayout="horizontal"
                    loading={props.initLoading}
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
                    </div>
        )    
}

export default ContriesListTab;