import React from 'react';
import { Tabs } from 'antd';
import { GLOBALS} from '../../globals/globals-variables';
import TabsView from '../scenes/tabsview'


const TabPane = Tabs.TabPane;

 class TripsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initLoading : true,                   
      datacountries : [],
      error : ''       
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
           datacountries: result
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
       
        const dependencias ={
            data : this.props,
            countries : this.state.datacountries
        };
    return(  
    
        <div>
        {
          isAuthenticated() && (
          <TabsView data={dependencias}></TabsView>
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

export {TripsContainer};