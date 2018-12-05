import React from 'react';
import {PantallaCargando,TituloBienvenida,ListadorDeModelos} from '../components/controlesautos';



class ListaModelosDeAutos extends React.Component {
   
    constructor(props){
        super(props);
        console.log(props);
        this.state = { 
            cargado : true,                                   
            autosPorModeloyAnno : {},
            error : ""
            
        };

      }

    componentDidMount() {
        let rutaAPI = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/' + this.props.filtro + '/modelyear/2015?format=json';
        console.log(rutaAPI);
        fetch(rutaAPI)
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