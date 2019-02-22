import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile = {};
  
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    audience: 'https://leogatgens.auth0.com/api/v2/',
    scope: 'openid profile read:messages'
  
 
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    
  }

  login() {
    this.auth0.authorize();
   
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
     
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    this.auth0.client.userInfo(authResult.accessToken,  (err, user)  => {
      if (user) { 
        this.userProfile = user.sub;      
        this.IsNewUser(user);
      }
      // Now you have the user's information 
    });

   
    // navigate to the home route
    history.replace('/home');
  }

  RegisterUser = (user)=> {
    let data = {
      FirstName:user.given_name,
      LastName:user.family_name,
      ClientId:user.sub
   }   
    fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers", {   
      method: 'post',
      headers: {     
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })         
      .then(res => {   
        console.log(res);   
         return res.json()
        }
      )
      .then(              
        (result) => {     
         console.log(result);
        }            
      ).catch(error => console.log(error));
    
  }

  IsNewUser = (user) =>{
    fetch(`https://tripsapi20181211043716.azurewebsites.net/api/travelers/${user.sub}`,{
      headers: {     
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
    })         
    .then(res => {     
       if(res.status === 404){
          this.RegisterUser(user);
       }
    }
    )
    .catch(error => console.log(error));  
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the home route
    history.replace('/home');
  }

  

  isAuthenticated() {

   
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
