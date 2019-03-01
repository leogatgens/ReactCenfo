 import { List,Avatar, message,Icon } from 'antd';
import React from 'react';
import { TituloPrincipal } from '../../../../components/estiloshtml';


class  WishList extends React.Component {  
  constructor(props){
    super(props);
    
}  

 convertirFecha = (fechatexto) =>{
        
  if(typeof fechatexto == "string"){
   var dateobj= new Date(fechatexto);     
   var year = dateobj.getFullYear();  
   var  locale = "en-us";
   var month = dateobj.toLocaleString(locale, { month: "long" });
   return month.toString().concat(" ").concat(year.toString());
  }
 
 return fechatexto;
}



  
  remove = (e) => {
  // Remove this TodoItem
  //this.props.removeTodo(this.props.todo.index);

 
  
  
  message.success('Deleted');
  this.props.onRemoveTrip(e);

}

render(){
  
 const {initLoading,error, data} = this.props.data;
  return(
    <div>                          
    <TituloPrincipal>Tus futuros viajes </TituloPrincipal>
        <List 
          itemLayout="horizontal"
          style={{ marginLeft:10 }}
          loading={initLoading}
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[
              <Icon
                key={item.idPais}
                type="close-circle"
                theme="filled"
                onClick={this.remove.bind(this,item.idPais)}
              />
            ]}>
              <List.Item.Meta                    
                avatar={<Avatar src={item.urlFlag} />}
                title={<a href={"https://www.google.com/search?q=" + item.pais }   target="_blank" rel="noopener noreferrer">{item.pais}</a>}
                description={`Viaje a ${item.name} planeado en  ` +  
                this.convertirFecha(item.annoDeLaVisita)                               
              }                                
              />
               <div>Content</div>
            </List.Item>                            
          )}
        />                
</div>);

}
}


export {WishList};