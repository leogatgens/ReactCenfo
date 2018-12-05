import React from 'react';
import Select from 'react-select';
import {TomatoButton,Wrapper} from './estilos';
let options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
class Formulario extends React.Component {


      
    constructor(props){
        super(props);
        this.state = {
            value : "",
            texto : "",
            fruta : ""             
        };   

        this.handleChange = this.handleChange.bind(this);    
        
    }

    handleChange(event){
        this.setState({value : event.target.value});    

    }
    handleChangeTextArea =(event) => {
      
        this.setState({texto : event.target.value});    

    }
    handleChangeSelect = (prueba) => {
     
        console.log(prueba);
       this.setState({fruta : prueba});    

    }

    handleSubmit = (event) =>{
         console.log(this.state);
        alert("Hola loco " + this.state.value.toString() +  this.state.texto.toString() +  this.state.fruta.value.toString() );
        event.preventDefault();
    }

    render(){
      
        return (
            <form onSubmit={this.handleSubmit} >
             <Wrapper>
                <label>
                    Name : 
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                   
                </label>
                <textarea value={this.state.texto} onChange={this.handleChangeTextArea}></textarea> 
                <Select options={options} value = {this.state.fruta}    onChange={this.handleChangeSelect}/>
                
                </Wrapper>    
                
                

              {/*    <input type="submit" value ="Submit"></input> */}
                <TomatoButton type="submit">Submit</TomatoButton>    
            </form>

        );
    }
}

export {Formulario};
