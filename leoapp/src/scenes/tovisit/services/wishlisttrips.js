import React from 'react';
import 'antd/dist/antd.css';
import { WishList } from '../scenes/viewwishlist/wishlist';
import { List,Avatar,Icon,message } from 'antd';
import { GLOBALS} from '../../globals/globals-variables';

class LoadWishTripsList extends React.Component {
  constructor(props){
        super(props);
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : ""
        };      
  }  

  componentDidMount() {       
      const serviceUrl = `${GLOBALS.rootAPI}/travelers/${this.props.auth.userProfile}/wishlists`;
      var miInit = {               
        headers : { Authorization : `Bearer ${this.props.auth.getAccessToken()}` }          
      }
        fetch(serviceUrl, miInit)         
          .then(res => {     
               
             return res.json()
            }
          )
          .then(              
            (result) => {     
              
               this.setState({                
                  initLoading : false,
                  data :result
              });
            }            
          ).catch(error => this.setState({ error : error.message }));
          
  } 

  handleRemoveItem = (value) =>{
    console.log(this);
    let listaNueva = this.state.data;
    const filteredItems = listaNueva.filter(item => item.idPais !== value)
      this.setState({                                                                    
        data : filteredItems,
        error : ""
      });
      console.log(filteredItems);
  }
 
    
    render(){  
     
        
        if(this.state.error){     
            return <div>Lo sentimos algo salio mal:  {this.state.error}  </div>;       
        }else {
            return (
            <WishList data = {this.state} onRemoveTrip={this.handleRemoveItem} ></WishList>
                );
        }                
    }
}


export {LoadWishTripsList};
