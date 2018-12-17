import React from "react";


const ListadorDeTrips = (props) => {
 console.log(props);
        return( 
            <ul>
            {props.trips.map((item) => (
                
                <li key= {item.idPais} >
                      IdPais : {item.idPais}  
                      --  FechaDeVisita :  {item.fechaDeLaVisita}  
                      -- Codigo País : {item.codigoPais}
                      -- Pais : {item.pais}
                </li>

            ))}
            </ul>
        );
    
}


export  {ListadorDeTrips};