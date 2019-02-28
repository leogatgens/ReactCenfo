import React from 'react';
import 'antd/dist/antd.css';
import TabContainer from '../components/mytripscontainer'
import { GLOBALS} from '../../globals/globals-variables';


class TripsOption extends React.Component {  
  constructor(props){
        super(props);      
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : ""     
        };      
  } 

    componentDidMount() {
      const serviceUrl = `${GLOBALS.rootAPI}/travelers/${this.props.auth.userProfile}/trips`;
      var miInit = {               
        headers : { Authorization : `Bearer ${this.props.auth.getAccessToken()}` }          
      }      
      
        fetch(serviceUrl,miInit)      
          .then(res => {                  
             return res.json();
            }
          )
          .then(              
            (result) => {                 
               this.setState({                
                  initLoading : false,
                  data : result
              });
            }            
          ).catch(error => this.setState({ error : error.message }));
      
      } 
    render(){
        const {initLoading,error,data} = this.state;
        if(error){     
            return <div>Lo sentimos algo salio mal:  {error.message}  </div>;       
        }else { 
            return (
                      <TabContainer data={data}></TabContainer>

                );
          }                
     }

}


export default TripsOption;