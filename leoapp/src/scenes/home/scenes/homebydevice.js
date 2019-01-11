import React from 'react';
import {ContenedorCardsMobile} from '../components/cardcomponent'
import {ContenedorCardsBrowser} from '../components/horizontalcards'

import {
    BrowserView,
    MobileView  
  } from "react-device-detect";


const ContenedorCards = () => {
    return(
        <>
        <BrowserView>   
            < ContenedorCardsBrowser></ContenedorCardsBrowser>    
        </BrowserView>
        <MobileView>                
            <ContenedorCardsMobile></ContenedorCardsMobile>
         </MobileView>  
       </>
    )
}

export {ContenedorCards};