import React from 'react';
import './index.css';

import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './practice/controlesautos';
import {ContenedorCards} from './scenes/home/scenes/homebydevice';
import {LoadMoreList} from './scenes/mytrips/services/listartrips1';
import {MenuAPP} from './components/menu';
import {Formularionewtrip} from './scenes/tovisit/components/formularionewtrip';
import {WrappedNormalLoginForm} from './scenes/login/components/loginform';
import { CookiesProvider,withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Main   extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props){
        super(props);

  
        const { cookies } = props;

  
        this.state = {         
          islogged: cookies.get('user')  
        };

        
        this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
  } 

  onSuccessfulLogin = (e) =>{
    console.log(this.props);
    const { cookies } = this.props;
 
    cookies.set('user', "{user : true}", { path: '/' });

    this.setState({
      islogged: true
    });
  }

  render(){
     

        let isUserLogged = this.state.islogged;
        if(isUserLogged){
        
          return (
            <CookiesProvider>
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
          </CookiesProvider>
        )
  }else{
 
 return( 
  <CookiesProvider>
      <BrowserRouter>           
        <div>
          <MenuAPP/>
          <Switch>            
            <Route exact path="/"  render={(props) => ( <WrappedNormalLoginForm onLogin ={this.onSuccessfulLogin}/> ) } />  
            <Route component={Notfound}/>
          </Switch>
        </div>
    </BrowserRouter>
    </CookiesProvider>
 )
  }
     
    }
}
    
  

export default withCookies(Main);