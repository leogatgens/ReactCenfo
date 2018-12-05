import React from 'react';
import {PantallaCargando,TituloBienvenida,ListadorDeModelos} from '../components/controlesautos';


class ListaModelosDeAutos extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cargado : true,                                   
            autosPorModeloyAnno : {},
            error : ""
        };
      }

    componentDidMount() {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json")
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
        console.log(autosPorModeloyAnno);
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <div>Cargando....</div>;
        }else {      
                  const texto = "Modelos por marca: " + autosPorModeloyAnno.SearchCriteria;
                    return( 
                        <div>
                        <TituloBienvenida label = {texto}></TituloBienvenida> 
                    
                        {autosPorModeloyAnno.Count > 0 ? <ListadorDeModelos autos = {autosPorModeloyAnno} /> :<PantallaCargando /> }  
                        </div>
                    );
                }
                
     }
    
   
     
}


export {ListaModelosDeAutos};