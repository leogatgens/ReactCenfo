import { Timeline } from 'antd';
import React from 'react';
import { string } from 'prop-types';
class PendingTimeLine extends React.Component {
  constructor(props){
    super(props);
          
}
convertirFecha(fechatexto){
  if(typeof fechatexto == "string"){
   var dateobj= new Date(fechatexto);     
   var year = dateobj.getFullYear();  
   var  locale = "en-us";
   var month = dateobj.toLocaleString(locale, { month: "long" });
   return month.toString().concat(" ").concat(year.toString());
  }
 
 return fechatexto;
}


  render() {
    console.log(this);
    return (
      <div>
        <Timeline>     
        {this.props.data.map((item,i) => (                                
                  <Timeline.Item key={i + "." + item.idPais} >Tu viaje a {item.pais } en  {this.convertirFecha(item.annoDeLaVisita)}</Timeline.Item>   
        ))     
       }    
        </Timeline>        
      </div>
    );
  }
}

export default PendingTimeLine;