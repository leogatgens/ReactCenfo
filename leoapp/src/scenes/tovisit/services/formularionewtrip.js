import React from 'react';
import {Wrapper} from '../../../estilos';
import { TituloPrincipal } from '../../../components/estiloshtml';
import { SelectCountry } from '../scenes/addwishlist/selectcountry';
import { Tabs,message } from 'antd';
import { GLOBALS} from '../../globals/globals-variables';
import {LoadWishTripsList} from './wishlisttrips'


const TabPane = Tabs.TabPane;

 class Formularionewtrip extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initLoading : "",                   
      data : [],
      recargarLista : false       
  };    
}

componentDidUpdate(prevProps) {
  console.log(prevProps);
  // Typical usage (don't forget to compare props):
  // if (this.props.filtro !== prevProps.filtro) {
  //   this.listarautomovilespormarca(this.props.filtro);
  // }
}

callback = () => {
 
}

componentDidMount() {     
  this.ListAllCountries();   
} 

   ListAllCountries =()=>{
     const serviceUrl = `${GLOBALS.rootAPI}/paises`;
     fetch(serviceUrl)
       .then(res => {
         return res.json();
       })
       .then((result) => {
         this.setState({
           initLoading: false,
           data: result
         });
       }).catch(error => this.setState({ error: error.message }));
   }

    login() {
        this.props.auth.login();
    }

    handleAddedCountry =() => {
      //alert("Se agrego un nuevo país");
      
      this.setState({                
        recargarLista : true  
      }); 
  }
    render(){
        const { isAuthenticated } = this.props.auth;
        const dependencias = {
          auth : this.props.auth,
          countries : this.state.data
        }
     
    return(  
        <div>
        {
          isAuthenticated() && (
           <Tabs defaultActiveKey="1" onChange={this.callback}>                
                <TabPane tab="Wish list" key="1">
                  <LoadWishTripsList auth = {dependencias.auth}></LoadWishTripsList>
                </TabPane>
                <TabPane tab="Add to Wish List" key="2">
                  <Wrapper>
                          <TituloPrincipal>Escoga países por visitar</TituloPrincipal>
                          <SelectCountry  data = {dependencias} onAddedCountry = {this.handleAddedCountry} ></SelectCountry>           
                  </Wrapper>
                </TabPane>

            </Tabs>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button   style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                  Log In
                </button >
                {' '}to continue.
              </h4>
            )
        }
      </div>         
    );
}
}

export {Formularionewtrip};