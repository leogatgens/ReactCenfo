import React from 'react';
import {PantallaCargando,TituloBienvenida} from '../components/controlesautos';
import {ListadorDeTrips} from '../components/tripcomponents';


class ListaViajesDelUsuario extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cargado : true,                                   
            misViajes : {},
            error : ""
        };

      
      }

   
      componentWillUnmount(){       
        console.log("componentWillUnmount ListaViajesDelUsuario");
      }
    
      componentWillUpdate(){
        console.log("componentDidUpdate ListaViajesDelUsuario");
      }

      componentDidUpdate(){
        console.log("componentWillUpdate ListaViajesDelUsuario");       
      }


    componentDidMount() {
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips")          
          .then(res => {      
             return res.json()
            }
          )
          .then(              
            (result) => {     
               this.setState({  
                  cargado : true,
                  misViajes :result
              });
            }            
          ).catch(error => this.setState({ error, cargado: false }));
      
      } 
    render(){

        const {error,misViajes,cargado} = this.state;
        console.log(misViajes);
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <div>Cargando....</div>;
        }else {      
            
                    return( 
                        <div>
                        <TituloBienvenida  label="Sus viajes por el mundo" ></TituloBienvenida> 
                    
                        {misViajes.length > 0 ? <ListadorDeTrips trips = {misViajes} /> :<PantallaCargando /> }  
                        </div>
                    );
                }
                
     }
    
   
     
}


export {ListaViajesDelUsuario};