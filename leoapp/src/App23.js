import React, { Component } from 'react';
import { Navbar, Button,Nav } from 'react-bootstrap';
import './index.css';

class App extends Component {
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
    console.log("componentDidMount");
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {

    console.log(this.props);
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar  fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Mis viajes por el mundo - usuario</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
          
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                <div>
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                     <Button
                     id="qsLogoutBtn"
                     bsStyle="primary"
                     className="btn-margin"
                     onClick={this.goTo.bind(this, 'porvisitar')}
                   >
                     Por visitar
                   </Button>
                   <Button
                     id="qsLogoutBtn"
                     bsStyle="primary"
                     className="btn-margin"
                     onClick={this.goTo.bind(this, 'misviajes')}
                   >
                     Mis viajes
                   </Button>
                   </div>
                )
            }
     
     </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
