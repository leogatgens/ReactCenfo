import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';


const ListadorDeTrips = (props) => {

        return( 
            <Table bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>País</th>                     
                    <th>Año de la visita</th>   
                </tr>            
                </thead>
                <tbody>
            {props.trips.map((item) => (              
                  
                        <tr key= {item.idPais}>
                            <th scope="row">{item.idPais}</th>
                            <td>{item.pais}</td>                         
                            <td>{item.annoDeLaVisita}</td>
                      
                        </tr>
                        
                   
            ))}
             </tbody>
            </Table>
        );
    
}


export  {ListadorDeTrips};