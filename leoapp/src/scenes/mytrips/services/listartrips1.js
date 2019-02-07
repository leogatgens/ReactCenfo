import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar,Tabs } from 'antd';
import TextButtons from '../../../components/filtromenu';
import { TituloPrincipal } from '../../../components/estiloshtml';
import  PendingTimeLine  from '../components/timeline';


const TabPane = Tabs.TabPane;
class LoadMoreList extends React.Component {

  
  constructor(props){
        super(props);
      
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : ""
     
        };      
  } 

   eliminarPaisesDuplicados(trips)
   {
    const idPaises = new Set();
    const paisesVisitados = [];

    trips.forEach(trip => {      
       if(idPaises.has(trip.idPais) === false)
       {
          paisesVisitados.push(trip);
       }
      idPaises.add(trip.idPais);
      
     });
     return paisesVisitados;
   }

   componentDidCatch(error, info) {
   
    console.log("componentDidCatch");
    console.log(info.componentStack);
    console.log(error);
  }

componentWillUnmount(){       

}
    
componentWillUpdate(){

}

  componentDidUpdate(){
        
  }


    componentDidMount() {
   
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers/1/trips",
        {headers : { Authorization : `Bearer ${this.props.auth.getAccessToken()}`}

      })        
          .then(res => {      
             return res.json()
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
        
       const paiseseSinduplicados =  this.eliminarPaisesDuplicados(data);

        if(error){     
            return <div>Lo sentimos algo salio mal:  {error.message}  </div>;       
        }else { 
            return (
              <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="Historia de tus viajes" key="1">
              <TituloPrincipal>El cronograma de tus viajes.</TituloPrincipal>                    
                    <PendingTimeLine data={data}></PendingTimeLine>
              </TabPane>

              <TabPane tab="Lista países visitados" key="2">
              <TextButtons></TextButtons>                                            
                    <TituloPrincipal>Has visitado {paiseseSinduplicados.length} países</TituloPrincipal>
            
                        <List style={{ marginLeft:10 }}
                          itemLayout="horizontal"
                          loading={initLoading}
                          dataSource={paiseseSinduplicados}
                          renderItem={item => (
                            <List.Item>
                              <List.Item.Meta                    
                                avatar={<Avatar src={item.urlFlag} />}
                                title={<a href={"https://www.google.com/search?q=" + item.pais }   target="_blank" rel="noopener noreferrer">{item.pais}</a>}                                                       
                              />
                            </List.Item>                            
                          )}
                        />        
              </TabPane>          
          </Tabs>                 
           
                );
          }                
     }

}


export default LoadMoreList;