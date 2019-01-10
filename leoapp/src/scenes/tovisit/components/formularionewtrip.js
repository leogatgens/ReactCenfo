import React from 'react';
import {Wrapper} from '../../../estilos';
import { TituloPrincipal } from '../../../components/estiloshtml';
import { SelectCountry } from '../scenes/addwishlist/selectcountry';
import { Tabs } from 'antd';

import {LoadWishTripsList} from '../services/wishlisttrips'


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


 const Formularionewtrip = (props) => {

    return( 
      
            <Tabs defaultActiveKey="1" onChange={callback}>
                
                <TabPane tab="Wish list" key="1">
                <LoadWishTripsList></LoadWishTripsList>
                </TabPane>
                <TabPane tab="Add to Wish List" key="2">
                    <Wrapper>
                            <TituloPrincipal>Escoga países por visitar</TituloPrincipal>
                            <SelectCountry></SelectCountry>           
                    </Wrapper>
                </TabPane>

            </Tabs>

    );
}



export {Formularionewtrip};