import { Card,Button,message } from 'antd';
import React from 'react';
import { GLOBALS} from '../../../globals/globals-variables';

class CountryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        value : "",                   
        error : ""       
    };           
  }
   AddItemToWishList = (props) =>{
    const newCountry = {
      IdPais : 1,
      Name : this.props.data.valor.label,
      ClientId : this.props.data.auth.userProfile
    };

  
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${newCountry.ClientId}/wishlists`;
      var miInit = {               
        headers : {
          Authorization : `Bearer ${this.props.data.auth.getAccessToken()}`,
          'Accept': 'application/json',  
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(newCountry)       
      }

       fetch(serviceUrl, miInit )         
        .then(res => {  
                
           return res.json()
          }
        )
        .then(              
          (result) => {     
       
            message.success('This is a message of success');
          }            
        ).catch(error => this.setState({ error : error.message }));           
  }
  render(){ 
    const valor = this.props.data.valor; 
    return(
        <div>
        <Card title={valor.label} bordered={false} style={{ width: '100%', marginTop:10}}>
          <p>Continente: NOMBRE CONTINENTE  </p>
          <p>Capital: NOMBRE CAPITAL </p>
          <p>Click here for information about   <a href={"https://www.google.com/search?q=" + valor.label }   target="_blank" rel="noopener noreferrer">{valor.label}</a></p>
        
          <Button icon="plus" size="large" onClick={this.AddItemToWishList}>Add to list</Button>
        </Card>
      </div>
    );
}
}

export {CountryCard};