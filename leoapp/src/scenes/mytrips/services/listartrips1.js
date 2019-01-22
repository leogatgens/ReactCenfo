import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar,Tabs } from 'antd';
import TextButtons from '../../../components/filtromenu';
import { TituloPrincipal } from '../../../components/estiloshtml';
import  PendingTimeLine  from '../components/timeline';
import { CookiesProvider,withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

const TabPane = Tabs.TabPane;
class LoadMoreList extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props){
        super(props);
        const { cookies } = props;  
     
        let valorAlmacenado = cookies.get('user');
        console.log("Leyoooooooooo");
        console.log(valorAlmacenado);
        if(valorAlmacenado === undefined){
          valorAlmacenado = {"user" : "", "iduser" : -1,"islogged" : false };
        }
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : "",
          userinfo : valorAlmacenado
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
       console.log(this.state.userinfo.iduser);
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers/" + this.state.userinfo.iduser + "/trips")          //https://tripsapi20181211043716.azurewebsites.net/api/trips
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


export default withCookies(LoadMoreList);