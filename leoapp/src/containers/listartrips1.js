import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';


class LoadMoreList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cargado : true,                                   
            misViajes : {},
            error : ""
        };

      
      }

   
      componentWillUnmount(){       
     
      }
    
      componentWillUpdate(){
      
      }

      componentDidUpdate(){
           
      }


    componentDidMount() {
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips")          
          .then(res => {      
             return res.json()
            }
          )
          .then(              
            (result) => {     
               this.setState({  
                  cargado : true,
                  misViajes :result
              });
            }            
          ).catch(error => this.setState({ error, cargado: false }));
      
      } 
    render(){

        const {error,misViajes,cargado} = this.state;
        console.log(misViajes);
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <div>Cargando....</div>;
        }else {      
            
            return (
                <List
                itemLayout="horizontal"
                dataSource={misViajes}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.urlFlag} />}
                      title={<a href={"https://www.google.com/search?q=" + item.pais}   target="_blank">{item.pais}</a>}
                      description={"Tu viaje fue realizado en el año " +   item.annoDeLaVisita}
                    />
                  </List.Item>
                )}
              />
                );
                }
                
     }
    
   
     
}


export {LoadMoreList};