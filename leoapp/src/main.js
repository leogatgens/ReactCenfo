import React from 'react';
import './index.css';
import {ListaMarcasDeAutos} from './containers/listarmarcas';
import {FormularioBusquedaPorMarca} from './components/formularioseleccion';
import { Route, BrowserRouter ,Switch  } from 'react-router-dom';
import {Notfound} from './components/controlesautos';

import Example from './components/carousel';
import {ListaViajesDelUsuario} from './containers/listartrips';

import {MenuAPP} from './components/menu';

const Main = (props) =>{
    
    
      return (
        <BrowserRouter>           
        <div>
          <MenuAPP/>
          <Switch>               
            <Route exact path="/" component={Example} /> 
            <Route exact path="/marcas" component={ListaMarcasDeAutos} /> 
            <Route exact path="/modelos" component={FormularioBusquedaPorMarca} />  
            <Route exact path="/misviajes" component={ListaViajesDelUsuario} />  
            <Route component={Notfound}/>
          </Switch>
        </div>
  </BrowserRouter>
      )
}
    
  

export default Main;