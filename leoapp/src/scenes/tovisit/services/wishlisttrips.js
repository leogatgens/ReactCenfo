import React from 'react';
import 'antd/dist/antd.css';
import { TituloPrincipal } from '../../../components/estiloshtml';
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

  convertirFecha(fechatexto){
        
         if(typeof fechatexto == "string"){
          var dateobj= new Date(fechatexto);     
          var year = dateobj.getFullYear();  
          var  locale = "en-us";
          var month = dateobj.toLocaleString(locale, { month: "long" });
          return month.toString().concat(" ").concat(year.toString());
         }
        
        return fechatexto;
  }

  remove = () => {
    // Remove this TodoItem
    //this.props.removeTodo(this.props.todo.index);
    message.success('Eliminado');
  };
    
    render(){  
        const {initLoading,error,data} = this.state;
        
        if(error){     
            return <div>Lo sentimos algo salio mal:  {error}  </div>;       
        }else {
            return (
              <div>                          
                    <TituloPrincipal>Tus futuros viajes </TituloPrincipal>
                        <List 
                          itemLayout="horizontal"
                          style={{ marginLeft:10 }}
                          loading={initLoading}
                          dataSource={data}
                          renderItem={item => (
                            <List.Item actions={[
                              <Icon
                                type="close-circle"
                                theme="filled"
                                onClick={this.remove}
                              />
                            ]}>
                              <List.Item.Meta                    
                                avatar={<Avatar src={item.urlFlag} />}
                                title={<a href={"https://www.google.com/search?q=" + item.pais }   target="_blank" rel="noopener noreferrer">{item.pais}</a>}
                                description={`Viaje a ${item.name} planeado en ` +  
                                this.convertirFecha(item.annoDeLaVisita)                               
                              }                                
                              />
                               <div>Content</div>
                            </List.Item>                            
                          )}
                        />                
              </div>
                );
        }                
    }
}


export {LoadWishTripsList};
