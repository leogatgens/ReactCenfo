import { Carousel } from 'antd';
import React from 'react';
import {
    BrowserView,
    MobileView,    
    isMobile
  } from "react-device-detect";
  import '../index.css';

const CarouselPrincipal = () =>{
if(isMobile)
{
   return (
    <Carousel effect="fade">
     <div className="imgcontainer"> <img  src="https://yourtrips.azurewebsites.net/img/bigslide1.jpg" alt="Imagen 1" /></div>
    <div><h1> This is rendered only on mobile</h1></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    <h1> This is rendered only on mobile </h1>
</Carousel>  
   )
}else{
    return (
        
        <div>
            <Carousel effect="fade">
            <div className="imgcontainer"> <img  src="https://yourtrips.azurewebsites.net/img/bigslide1.jpg" alt="Imagen 1" /></div>
            <div className="imgcontainer"><h3>2</h3></div>
            <div className="imgcontainer"><h3>3</h3></div>
            <div className="imgcontainer"><h3>4</h3></div>
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