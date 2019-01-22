import React from 'react';
import './index.css';

import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './practice/controlesautos';
import {ContenedorCards} from './scenes/home/scenes/homebydevice';
import LoadMoreList from './scenes/mytrips/services/listartrips1';
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
     
        let valorAlmacenado = cookies.get('user');
        console.log("Leyo de cookie");
        console.log(valorAlmacenado);
        if(valorAlmacenado === undefined){
          valorAlmacenado = {"user" : "", "iduser" : -1,"islogged" : false };
        }
    
  
        this.state = {         
          userinfo: valorAlmacenado
        };
        
        this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
  } 

  onSuccessfulLogin = (e) =>{
   
    const { cookies } = this.props; 
    let valorAlmacenado = undefined;
    if(e.userName.toLowerCase() === "mariela")
    {
       valorAlmacenado = {"user" : "Mariela", "iduser" : 2,"islogged" : true };
        cookies.set('user', JSON.stringify(valorAlmacenado), { path: '/' });
    }else{
       valorAlmacenado = {"user" : "leogatgens", "iduser" : 1,"islogged" : true };
      cookies.set('user', JSON.stringify(valorAlmacenado), { path: '/' });
    }

    this.setState({
      userinfo: valorAlmacenado
    });
  }

  render(){



        let userInfo = this.state.userinfo;
        if(userInfo.islogged === true){
        
          return (
            <CookiesProvider>
            <BrowserRouter>           
                <div>
                  <MenuAPP data = {userInfo}/>
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