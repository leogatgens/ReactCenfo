import { Carousel } from 'antd';
import React from 'react';
import {
    BrowserView,
    MobileView,    
    isMobile
  } from "react-device-detect";


const CarouselPrincipal = () =>{
if(isMobile)
{
   return (
    <Carousel effect="fade">
    <div><h1> This is rendered only on mobile</h1></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
</Carousel>  
   )
}else{
    return (
        
        <div>
            <Carousel effect="fade">
            <div> <img src="https://yourtrips.azurewebsites.net/img/imgslide1.jpg" alt="Imagen" /></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>  
        <BrowserView>
        <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
                <h1> This is rendered only on mobile </h1>
         </MobileView>  
    </div>
    );
        
}
   
            
      
    }

export {CarouselPrincipal}