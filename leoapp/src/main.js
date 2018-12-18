import React from 'react';
import './index.css';
import {ListaMarcasDeAutos} from './containers/listarmarcas';
import {FormularioBusquedaPorMarca} from './components/formularioseleccion';
import { Route, BrowserRouter ,Switch,NavLink as RRNavLink  } from 'react-router-dom';
import {Notfound} from './components/controlesautos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';
import Example from './components/carousel';
import {ListaViajesDelUsuario} from './containers/listartrips';

class Main extends React.Component{
    constructor(props){
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
   
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render(){
      return (
        <BrowserRouter>      
     
          <div>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Conoce sobre autos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
     
          <Nav className="ml-auto" navbar>
       
          <NavItem>
              <NavLink exact to="/" className="nav-link" activeclassname="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
              <NavLink actvieclassname="active" to="/marcas" tag={RRNavLink}>  Marcas de autos </NavLink>
          </NavItem>
          <NavItem>              
              <NavLink actvieclassname="active" to="/misviajes" tag={RRNavLink}> Mis viajes</NavLink>             
          </NavItem>
			  
       
       
            </Nav>
          </Collapse>
      
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
    </BrowserRouter>
      )
    }
  }

  export default Main;