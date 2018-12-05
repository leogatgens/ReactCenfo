import React from 'react';


class ConexionAPI extends React.Component{ 
constructor(props){
 super(props); 
 this.state = {
     error : null,
     cargado : null,
     elementos : []
 };
}

componentDidMount() {
    fetch("http://scratchya.com.ar/vue/datos.php")
      .then(res => res.json())
      .then(
        (result) => {          
           this.setState({  
              cargado : true,
               elementos : result     
          });
        },
    
        error => {
            this.setState({
                cargado : true,
                error
            });
        }
      );
  } 

  render (){
   
      const {error,cargado,elementos} = this.state;
 
      if(error){
       
          return <div>Error : {error.message}</div>;

      }else if(!cargado){
          return <div>Cargando....</div>;
      }else {
      return( 
      <ul>
        {elementos.map(item => (
            <li key={item.codigo}>
            {item.descripcion } : {item.precio}
         </li>

      ))}
      </ul> );
      }
   }
}

export {ConexionAPI}