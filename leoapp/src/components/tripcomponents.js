import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';


const ListadorDeTrips = (props) => {

        return( 
            <Table bordered>
                <thead>
                    <th>#</th>
                    <th>País</th>                     
                    <th>Año de la visita</th>               
                </thead>
            {props.trips.map((item) => (              
                    <tbody>
                        <tr>
                            <th scope="row">{item.idPais}</th>
                            <td>{item.pais}</td>                         
                            <td>{item.annoDeLaVisita}</td>
                            {console.log(typeof  item.annoDeLaVisita)}
                        </tr>
                        
                    </tbody>
            ))}
            </Table>
        );
    
}


export  {ListadorDeTrips};