import React from "react";
import { NavLink as RRNavLink  } from 'react-router-dom';
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

 class MenuAPP extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          logged : false
        };
     
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render()
      {
        let control;
        if( this.state.logged ){
          control = null;
        }else{
          control =  <NavItem> <NavLink actvieclassname="active" to="/login" tag={RRNavLink}> Login</NavLink></NavItem>    
          
        }

        return(
            <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Mis países por el mundo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink exact to="/" className="nav-link" activeclassname="active" tag={RRNavLink}>Home</NavLink>
            </NavItem>
        
            <NavItem>
                <NavLink actvieclassname="active" to="/marcas" tag={RRNavLink}>Por visitar </NavLink>
            </NavItem>

            <NavItem>              
                <NavLink actvieclassname="active" to="/misviajes" tag={RRNavLink}> Mis viajes</NavLink>             
            </NavItem> 
         
              {control}
            </Nav>
            </Collapse>

            </Navbar>
            </div>
        );
        }
 }

export {MenuAPP};