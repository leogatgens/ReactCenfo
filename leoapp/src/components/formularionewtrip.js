import React from 'react';
import {TomatoButton,Wrapper} from '../estilos';
import { TituloPrincipal } from './estiloshtml';
import { SelectCountry } from './selectcountry';


 const Formularionewtrip = (props) => {

    return( 
        <Wrapper>

            <TituloPrincipal>Seleccione sus nuevos países por visitar</TituloPrincipal>
            <SelectCountry></SelectCountry>
            <TomatoButton>+ Agregar países</TomatoButton>
        </Wrapper>
    );
}



export {Formularionewtrip};