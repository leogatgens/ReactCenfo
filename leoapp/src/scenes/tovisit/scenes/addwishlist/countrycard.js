import { Card,Button,message } from 'antd';
import React from 'react';

class CountryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        value : "",                   
        error : ""       
    };           
  }
   AddItemToWishList = (props) =>{
    console.log("Agregado"); 
    console.log(this); 

    const newCountry = {
      IdPais : 1,
      Name : this.props.data.valor,
      ClientId : this.props.data.auth.userProfile
    };

   // const serviceUrl = `https://tripsapi20181211043716.azurewebsites.net/api/travelers/${this.props.data.auth.userProfile}/wishlists`
    const serviceUrl = `https://localhost:44372/api/travelers/${newCountry.ClientId}/wishlists`;
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
          console.log(res);         
           return res.json()
          }
        )
        .then(              
          (result) => {     
            console.log(result);
            message.success('This is a message of success');
          }            
        ).catch(error => this.setState({ error : error.message }));           
  }
  render(){
    const valor = this.props.data.valor;
    return(

        <div>
        <Card title={valor} bordered={false} style={{ width: '100%', marginTop:10}}>
          <p>Continente: NOMBRE CONTINENTE  </p>
          <p>Capital: NOMBRE CAPITAL </p>
          <p>Click here for information about   <a href={"https://www.google.com/search?q=" + valor }   target="_blank" rel="noopener noreferrer">{valor}</a></p>
        
          <Button icon="plus" size="large" onClick={this.AddItemToWishList}>Add to list</Button>
        </Card>
      </div>
    );
}
}

export {CountryCard};