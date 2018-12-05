import React from "react";

import {TituloPrincipal} from '../components/estiloshtml';


const Notfound = () => <h1>Not found</h1>
const PantallaCargando = (props) =>{
    return (<h1>....Cargando</h1>);
    
    }
    
const TituloBienvenida = (props) => {
    return (<TituloPrincipal> {props.label} </TituloPrincipal>);
}
    
const ListadorDeModelos = (props) => {
    console.log(props.Results);
        return( 
            <ul>
            {props.autos.Results.map(item => (
                
                <li key = {item.Model_ID}>
                        {item.Model_Name} : {item.Make_Name} 
                </li>

            ))}
            </ul>
        );
    
}

const ListadorDeMarcas = (props) => {
    console.log(props.Results);
        return( 
            <ul>
            {props.autos.Results.map((item,i) => (
                
                <li key= {item.Make_ID} >
                        {item.Make_Name} 
                </li>

            ))}
            </ul>
        );
    
}


export  {PantallaCargando,TituloBienvenida,ListadorDeModelos,Notfound,ListadorDeMarcas};