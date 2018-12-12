import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';


import {ListaMarcasDeAutos} from './containers/listarmarcas';
import {FormularioBusquedaPorMarca} from './components/formularioseleccion';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import {Notfound} from './components/controlesautos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import Example from './components/carousel';
  import {ListaViajesDelUsuario} from './containers/listartrips';


class Main extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <Router>
       
     
          <div>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Conoce sobre autos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
     
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink> <Link activeClassName="active" to="/">
                  Home
                </Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink >    <Link actvieClassName="active" to="/marcas">
                  Marcas de autos
                </Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink >   <Link actvieClassName="active" to="/modelos">
                  Modelos por marca
                </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >   
                  <Link actvieClassName="active" to="/misviajes">
                  Mis viajes
                </Link>
                </NavLink>
              </NavItem>
              
            </Nav>
      
          </Navbar>
        
            <hr />
            <Switch>
               
              <Route exact path="/" component={Example} /> 
              <Route exact path="/marcas" component={ListaMarcasDeAutos} /> 
             <Route exact path="/modelos" component={FormularioBusquedaPorMarca} />  
             <Route exact path="/misviajes" component={ListaViajesDelUsuario} />  
             <Route component={Notfound}/>
            </Switch>
          </div>
    </Router>
      )
    }
  }

  export default Main;