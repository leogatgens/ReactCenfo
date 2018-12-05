import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';


import {ListaMarcasDeAutos} from './containers/listarmarcas';
import {FormularioBusquedaPorMarca} from './components/formularioseleccion';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import {Notfound} from './components/controlesautos';


class Main extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link exact activeClassName="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link actvieClassName="active" to="/marcas">
                  Marcas de autos
                </Link>
              </li>
              <li>
                <Link actvieClassName="active" to="/modelos">
                  Modelos por marca
                </Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/" component={Notfound} /> 
              <Route exact path="/marcas" component={ListaMarcasDeAutos} /> 
             <Route exact path="/modelos" component={FormularioBusquedaPorMarca} />  
               
            </Switch>
          </div>
    </Router>
      )
    }
  }

  export default Main;