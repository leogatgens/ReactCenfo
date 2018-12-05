import React from 'react';
import Select from 'react-select';
import {ListaModelosDeAutos} from '../containers/listarmodelos';
import {Input} from '../components/estiloshtml';
import {TomatoButton,Wrapper} from '../estilos';

let options = [
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' }
  ];

class TextBoxEspejo extends React.Component  {
    constructor(props){
        super(props);  
    }

    handleChange =(event) => {
      console.log(event);
         this.props.onTemperatureChange(event.target.value);
        
    }

    render(){
                return (
                    <>
                    <label>
                    Marca : 
                        <Input type="text" value={this.props.valorTexto} onChange ={this.handleChange} ></Input>
                    </label>
                    </>
            );
    }

}


class FormularioBusquedaPorMarca extends React.Component {      
    constructor(props){
        super(props);
        this.state = {
            value : "",
            texto : "",
            fruta : "",
            filtro : ""

        };           
}

    handleChange = (event) =>{
       
     console.log(event);
        this.setState({
            value : event
        });    
        
    }
 

    handleChangeSelect = (prueba) => {
     
       this.setState({fruta : prueba});    

    }

    handleSubmit = (event) =>{
        console.log("Evento handleChange");
        this.setState({filtro : this.state.value}); 
        event.preventDefault();
    }

    render(){
       const valor= this.state.value;
  

        return (
            <form onSubmit={this.handleSubmit} >
             <Wrapper>
                <TextBoxEspejo valorTexto = {valor} onTemperatureChange={this.handleChange}  ></TextBoxEspejo>
              
                <label>
                Año : 
                <Select options={options} value = {this.state.fruta}    onChange={this.handleChangeSelect}/>  
                </label>              
                </Wrapper>                        
                <TomatoButton type="submit">Submit</TomatoButton>
               {valor !== "" ? <ListaModelosDeAutos filtro = {valor} /> : <h1>digite un filtro</h1>} 
            </form>

        );
    }
}

export {FormularioBusquedaPorMarca};
