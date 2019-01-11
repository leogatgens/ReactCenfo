import React from 'react';
import {ContenedorCardsMobile} from '../components/cardcomponent'
import {CarouselPrincipal} from '../components/antcarousel'

import {
    BrowserView,
    MobileView  
  } from "react-device-detect";


const ContenedorCards = () => {
    return(
        <>
        <BrowserView>   
            < CarouselPrincipal></CarouselPrincipal>    
        </BrowserView>
        <MobileView>                
            <ContenedorCardsMobile></ContenedorCardsMobile>
         </MobileView>  
       </>
    )
}

export {ContenedorCards};