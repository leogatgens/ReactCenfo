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
      componentWillUnmount(){
        console.log("componentWillUnmount");   
      }
    
      componentWillUpdate(){
        console.log("componentDidUpdate");       
      }

      componentDidUpdate(prevProps) {
        console.log(prevProps);
        // Typical usage (don't forget to compare props):
        if (this.props.filtro !== prevProps.filtro) {
          this.listarautomovilespormarca(this.props.filtro);
        }
      }
  

      listarautomovilespormarca(filtro) {
        let rutaAPI = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/' + filtro.trim() + '/modelyear/2015?format=json';
        fetch(rutaAPI)
          .then(res => res.json())
          .then((result) => {
            this.setState({
              cargado: true,
              autosPorModeloyAnno: result
            });
          }, error => {
            this.state({
              cargado: true,
              error
            });
          });
      }

    componentDidMount() {
      console.log("componentDidMount");
      this.listarautomovilespormarca(this.props.filtro);
        
      }

    render(){
      
        const {error,autosPorModeloyAnno,cargado} = this.state;
   
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <PantallaCargando />;
        }else {    
            console.log("render");  
            console.log(autosPorModeloyAnno.Count );  
            
                  const texto = "Modelos por marca: " + autosPorModeloyAnno.SearchCriteria;
                    return( 
                        <div>
                        <TituloBienvenida label = {texto}></TituloBienvenida>                     
                        {autosPorModeloyAnno.Count > 0 ? <ListadorDeModelos autos = {autosPorModeloyAnno} /> : <PantallaCargando /> }  
                        </div>
                    );
                }                
     }
   
}
export {ListaModelosDeAutos};