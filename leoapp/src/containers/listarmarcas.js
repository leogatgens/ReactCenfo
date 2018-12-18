import React from 'react';
import {PantallaCargando,TituloBienvenida,ListadorDeMarcas} from '../components/controlesautos';


class ListaMarcasDeAutos extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cargado : true,                                   
            autosPorModeloyAnno : {},
            error : ""
        };

      
      }   
      componentWillUnmount(){      
      }
    
      componentWillUpdate(){                    
      }

      componentDidUpdate(){        
      }


    componentDidMount() {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
          .then(res => res.json())
          .then(
            (result) => {          
               this.setState({  
                  cargado : true,
                  autosPorModeloyAnno :result
              });
            },
        
            error => {
                this.state({
                    cargado : true,
                    error
                })
            }
          )
      
      } 
    render(){

        const {error,autosPorModeloyAnno,cargado} = this.state;
       
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <div>Cargando....</div>;
        }else {    
            return( 
                    <div>
                        <TituloBienvenida  label="Frabricantes de automoviles" ></TituloBienvenida> 
                    
                        {autosPorModeloyAnno.Count > 0 ? <ListadorDeMarcas autos = {autosPorModeloyAnno} /> :<PantallaCargando /> }  
                    </div>
                    );
                }                
     }    
}


export {ListaMarcasDeAutos};