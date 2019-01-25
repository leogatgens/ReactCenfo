import React , { Component } from 'react';
import {ContenedorCardsMobile} from '../components/cardcomponent'
import {ContenedorCardsBrowser} from '../components/horizontalcards'

import {
    BrowserView,
    MobileView  
  } from "react-device-detect";


class  ContenedorCards extends Component {

    login() {
        this.props.auth.login();
      }
    render(){

 
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
}

export {ContenedorCards};