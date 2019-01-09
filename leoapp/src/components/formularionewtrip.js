import React from 'react';
import {Wrapper} from '../estilos';
import { TituloPrincipal } from './estiloshtml';
import { SelectCountry } from './selectcountry';
import { Tabs } from 'antd';
import { TituloPrincipal as TituloPrin } from '../components/estiloshtml';
import {LoadWishTripsList} from '../containers/wishlisttrips'


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


 const Formularionewtrip = (props) => {

    return( 
      
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Add to Wish List" key="1">
                    <Wrapper>
                            <TituloPrin>Escoga países por visitar</TituloPrin>
                            <SelectCountry></SelectCountry>           
                    </Wrapper>
                </TabPane>

                <TabPane tab="Wish list" key="2">
                <LoadWishTripsList></LoadWishTripsList>
                </TabPane>
            
            </Tabs>

    );
}



export {Formularionewtrip};