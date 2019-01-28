import React, { Component } from 'react';
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
import './index.css';

class App extends Component {
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
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {

    console.log(this.props);
    const { isAuthenticated } = this.props.auth;

    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mis países por el mundo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>        
          <NavItem>
                <NavLink exact to="/home" className="nav-link" activeclassname="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
            {
              !isAuthenticated() && (
            <NavItem>
                <NavLink actvieclassname="active" to="/" onClick={this.login.bind(this)} tag={RRNavLink}>Login </NavLink>
            </NavItem>
  
        
        
                )
            }
            {
              isAuthenticated() && (
                <>   
                <NavItem>
                    <NavLink actvieclassname="active" to="/porvisitar" tag={RRNavLink}>Por visitar </NavLink>
                </NavItem>

                <NavItem>              
                    <NavLink actvieclassname="active" to="/misviajes" tag={RRNavLink}> Mis viajes</NavLink>             
                </NavItem> 
                <NavItem>
                <NavLink actvieclassname="active" to="/" onClick={this.logout.bind(this)} tag={RRNavLink}>Logout </NavLink>
            </NavItem>
  
       
                   </>
                )
            }
     
     </Nav>
          </Collapse>

          </Navbar>
      </>
    );
  }
}

export default App;
