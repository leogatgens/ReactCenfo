import React from "react";
const UserGreeting = (props) => <h1>Bienvenido {props.usuario.Nombre} </h1>;


const GuestGreeting = (props) =>{
    return (<h1>Intruso por favor loguearse</h1>);
}




const ItemLista = (props) => { return <li >{props.value}</li> };

const Lista = (props) => {
    const numbers =  props.data;
return <ul>{
    numbers.map((numero) =>
    <ItemLista key={numero} value={numero}></ItemLista>
    )

}</ul>
};

const ListasCondicionales = (props) => {  
        return (       
             
             props.data.isLoggedIn ? <UserGreeting usuario = {props.data}/> : <GuestGreeting/> 
                
            )

        }

export  {ListasCondicionales,Lista};