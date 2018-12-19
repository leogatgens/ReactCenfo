import React from 'react';
import './index.css';
import {ListaMarcasDeAutos} from './containers/listarmarcas';
import {FormularioBusquedaPorMarca} from './components/formularioseleccion';
import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './components/controlesautos';

import Example from './components/carousel';
import {ListaViajesDelUsuario} from './containers/listartrips';
import {LoadMoreList} from './containers/listartrips3';

import {MenuAPP} from './components/menu';
import {Formularionewtrip} from './components/formularionewtrip';

const Main = (props) =>{
    
    
      return (
        <BrowserRouter>           
        <div>
          <MenuAPP/>
          <Switch>               
            <Route exact path="/" component={Example} /> 
            <Route exact path="/marcas" component={Formularionewtrip} />     
            <Route exact path="/misviajes" component={LoadMoreList} />  
            <Route component={Notfound}/>
          </Switch>
        </div>
  </BrowserRouter>
      )
}
    
  

export default Main;