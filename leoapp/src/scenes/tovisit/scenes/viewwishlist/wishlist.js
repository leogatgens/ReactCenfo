 import { List,Avatar } from 'antd';
import React from 'react';
import { TituloPrincipal } from '../../../../components/estiloshtml';

function convertirFecha(fechatexto){
  if(typeof fechatexto == "string"){
   var dateobj= new Date(fechatexto);     
   var year = dateobj.getFullYear();  
   var  locale = "en-us";
   var month = dateobj.toLocaleString(locale, { month: "long" });
   return month.toString().concat(" ").concat(year.toString());
  }
 
 return fechatexto;
}

const  WishList = (props) => {  
 console.log(props);
  return(
     <div>
    <TituloPrincipal>Tus futuros viajes </TituloPrincipal>
   
    <List
     style={{ marginLeft: 10 }}
      itemLayout="horizontal"
       loading={props.data.initloading}
        dataSource={props.data.data}
         renderItem={item => (<List.Item>
      <List.Item.Meta 
      avatar={<Avatar src={item.urlFlag} />} 
      title={<a href={"https://www.google.com/search?q=" + item.pais} 
      target="_blank" 
      rel="noopener noreferrer">{item.pais}</a>} 
      description={"Tu viaje fue realizado en " +  convertirFecha(item.annoDeLaVisita)} />
    </List.Item>)} />
  </div>);
}


export {WishList};