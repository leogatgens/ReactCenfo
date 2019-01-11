import React from 'react';
import './index.css';

import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './practice/controlesautos';
import {ContenedorCards} from './scenes/home/scenes/homebydevice';
import {LoadMoreList} from './scenes/mytrips/services/listartrips1';
import {MenuAPP} from './components/menu';
import {Formularionewtrip} from './scenes/tovisit/components/formularionewtrip';

const Main = (props) =>{
    
    
      return (
        <BrowserRouter>           
        <div>
          <MenuAPP/>
          <Switch>               
            <Route exact path="/" component={ContenedorCards} /> 
            { <Route exact path="/marcas" component={Formularionewtrip} />      }
            <Route exact path="/misviajes" component={LoadMoreList} />  
            <Route component={Notfound}/>
          </Switch>
        </div>
  </BrowserRouter>
      )
}
    
  

export default Main;