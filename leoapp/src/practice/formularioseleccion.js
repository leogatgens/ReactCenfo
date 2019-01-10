import React from 'react';

import {ListaModelosDeAutos} from '../containers/listarmodelos';
import {Input} from '../components/estiloshtml';
import {TomatoButton,Wrapper} from '../estilos';




class TextBoxEspejo extends React.Component  {
    constructor(props){
        super(props); 
        this.state = {
            filtro :""
        }        
    }

    handleChange =(event) => {
    
        this.setState({      
                  filtro : event.target.value
        });
        
    }

    handleClick = (event) => {
    
        this.props.onTemperatureChange(this.state.filtro);
    }
    render(){
                return (
                    <>
                    <label>
                    Marca : 
                        <Input type="text" placeholder="Escriba la marca de automovil" value={this.state.filtro} onChange ={this.handleChange} ></Input>
                    </label>
                    <TomatoButton onClick={this.handleClick}>Consultar</TomatoButton>
                    </>
            );
    }

}


class FormularioBusquedaPorMarca extends React.Component {      
    constructor(props){
        super(props);
        this.state = {
            value : "",            
            filtro : "",
            listadeMarcas : {},
            error : "",
            cargado : true

        };           
}

    handleChange = (event) =>{    
        this.setState({
            value : event
        });   
       
    }
 
    render(){
       const valor= this.state.value;  
        return (
            <div >
             <Wrapper>
                <TextBoxEspejo valorTexto = {valor} onTemperatureChange={this.handleChange}  ></TextBoxEspejo>    
            </Wrapper>                     
               
            {valor !== "" ? <ListaModelosDeAutos filtro = {valor} /> : <h1>digite un filtro</h1>} 
            </div>

        );
    }
}

export {FormularioBusquedaPorMarca};
