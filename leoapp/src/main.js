import React from 'react';
import './index.css';

import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './practice/controlesautos';
import {ContenedorCards} from './scenes/home/scenes/homebydevice';
import {LoadMoreList} from './scenes/mytrips/services/listartrips1';
import {MenuAPP} from './components/menu';
import {Formularionewtrip} from './scenes/tovisit/components/formularionewtrip';
import {WrappedNormalLoginForm} from './scenes/login/components/loginform';

class Main   extends React.Component {
  constructor(props){
        super(props);
        this.state = { 
          islogged: false          
        }; 
        
        this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
  } 

  onSuccessfulLogin = (e) =>{
    console.log(e);
    this.setState({
      islogged: true
    });
  }

  render(){

    let isUserLogged = this.state.islogged;
  if(isUserLogged){
    console.log("logedd exitoso");
    return (
      
      <BrowserRouter>           
          <div>
            <MenuAPP isUserLogged = {isUserLogged}/>
            <Switch>               
              <Route exact path="/" component={ContenedorCards} /> 
              <Route exact path="/marcas" component={Formularionewtrip} />      
              <Route exact path="/misviajes" component={LoadMoreList} />  
       
              <Route component={Notfound}/>
            </Switch>
          </div>
    </BrowserRouter>
        )
  }else{
    console.log("sin login");
 return( 
      <BrowserRouter>           
        <div>
          <MenuAPP/>
          <Switch>            
            <Route exact path="/"  render={(props) => ( <WrappedNormalLoginForm onLogin ={this.onSuccessfulLogin}/> ) } />  
            <Route component={Notfound}/>
          </Switch>
        </div>
    </BrowserRouter>
 )
  }
     
    }
}
    
  

export default Main;