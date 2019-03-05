import React from 'react';
import { Tabs } from 'antd';
import WishListContainer from '../services/wishlistContainer'
import {Wrapper} from '../../../estilos'
import {TituloPrincipal} from '../../../components/estiloshtml'
import {SelectCountry} from '../scenes/addwishlist/selectcountry'

const TabPane = Tabs.TabPane;

 class TabsView extends React.Component {

  constructor(props){
    super(props);
  
  }

  handleAddedCountry = () =>{

  }
    render(){ 
  
       console.log(this);
    return(  
        <div>
        {         
           <Tabs defaultActiveKey="1" onChange={this.callback}>                
                <TabPane tab="Wish list" key="1">
                  <WishListContainer data = {this.props.data}></WishListContainer>
            </TabPane>
            <TabPane tab="Add to Wish List" key="2">
                <Wrapper>
                    <TituloPrincipal>Escoga países por visitar</TituloPrincipal>
                    <SelectCountry  data = {this.props} onAddedCountry = {this.handleAddedCountry} ></SelectCountry>           
                </Wrapper>
            </TabPane>

            </Tabs>
            
        }
       
      </div>         
    );
}
}

export default TabsView;
