import React from "react";


const ListadorDeTrips = (props) => {
 console.log(props);
        return( 
            <ul>
            {props.autos.map((item,i) => (
                
                <li key= {item.id} >
                        {item.pais} 
                </li>

            ))}
            </ul>
        );
    
}


export  {ListadorDeTrips};