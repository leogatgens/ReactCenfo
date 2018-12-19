import React from 'react';
import {TomatoButton,Wrapper} from '../estilos';
import { TituloPrincipal } from './estiloshtml';


 const Formularionewtrip = (props) => {

    return( 
        <Wrapper>
            <TituloPrincipal>Paises por visitar</TituloPrincipal>
            <TomatoButton>+ Nuevo lugar</TomatoButton>
        </Wrapper>
    );
}



export {Formularionewtrip};