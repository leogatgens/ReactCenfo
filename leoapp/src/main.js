import React from 'react';
import './index.css';

import { Route, Router  } from 'react-router-dom';
import {ContenedorCards} from './scenes/home/scenes/homebydevice';
import LoadMoreList from './scenes/mytrips/services/listartrips1';
import {Formularionewtrip} from './scenes/tovisit/components/formularionewtrip';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

import App from './App';
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
export const makeMainRoutes = () => {
          return (    
            <Router history={history}>           
                <div>
                    <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                    <Route  path="/home" render={(props) => <ContenedorCards auth={auth} {...props} />} /> 
                    <Route  path="/porvisitar" render={(props) => <Formularionewtrip auth={auth} {...props} />}  />      
                    <Route  path="/misviajes"  render={(props) => <LoadMoreList auth={auth} {...props} />} />  
                    <Route path="/callback" render={(props) => {
                          handleAuthentication(props);
                          return <Callback {...props} /> 
                        }}/>    
                </div>
          </Router>
 
        )
 
     
    }

    
  
