import React from 'react';
import Select from 'react-select';
import {TomatoButton,Wrapper} from '../estilos';
let options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class TextBoxEspejo extends React.Component  {
    constructor(props){
        super(props);
             
       
}

handleChange =(e) => {
    this.props.onTemperatureChange(e.target.value);
}

render(){
            return (
                <>
                <label>
                Name : 
                    <input type="text" value={this.props.valorTexto} onChange ={this.handleChange} ></input>
                </label>
                </>
        );
    }

}


class AppElevando extends React.Component {      
    constructor(props){
        super(props);
        this.state = {
            value : "",
            texto : "",
            fruta : ""             
        };           
}

    handleChange = (event) =>{
        console.log(event);
        this.setState({value : event});    

    }
    handleChange2 = (event) =>{
        console.log(event);
        this.setState({value : event});    

    }
    handleChangeTextArea =(event) => {
      
        this.setState({texto : event});    

    }
    handleChangeSelect = (prueba) => {
     
      
       this.setState({fruta : prueba});    

    }

    handleSubmit = (event) =>{
   
        alert("Hola loco " + this.state.value.toString() +  this.state.texto.toString() +  this.state.fruta.value.toString() );
        event.preventDefault();
    }

    render(){
       const valor= this.state.value;
  

        return (
            <form onSubmit={this.handleSubmit} >
             <Wrapper>
                <TextBoxEspejo valorTexto = {valor} onTemperatureChange={this.handleChange}  ></TextBoxEspejo>
                <TextBoxEspejo valorTexto = {valor} onTemperatureChange={this.handleChange2}  ></TextBoxEspejo>
                <textarea value={this.state.texto} onChange={this.handleChangeTextArea}></textarea> 
                <Select options={options} value = {this.state.fruta}    onChange={this.handleChangeSelect}/>                
                </Wrapper>                        
                <TomatoButton type="submit">Submit</TomatoButton>    
            </form>

        );
    }
}

export {AppElevando};
