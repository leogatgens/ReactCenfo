import React from 'react';


import { Tabs } from 'antd';
import { GLOBALS} from '../../globals/globals-variables';

import TextButtons from '../../../components/filtromenu';
import { TituloPrincipal } from '../../../components/estiloshtml';
import  PendingTimeLine  from '../components/timeline';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


 class TripsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initLoading : "",                   
      data : []       
  };    
}
componentDidMount() {    
 
  const serviceUrl = `${GLOBALS.rootAPI}/paises`;

    fetch(serviceUrl)         
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

    login() {
        this.props.auth.login();
    }
    render(){
        const { isAuthenticated } = this.props.auth;
       

    return( 
        <div>
        {
          isAuthenticated() && (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Historia de tus viajes" key="1">
            <TituloPrincipal>El cronograma de tus viajes.</TituloPrincipal>                    
                  <PendingTimeLine data={null}></PendingTimeLine>
            </TabPane>

            <TabPane tab="Lista países visitados" key="2">
            <TextButtons></TextButtons>                                            
                
          
                  
                      />        
            </TabPane>          
        </Tabs>     
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button   style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                  Log In
                </button >
                {' '}to continue.
              </h4>
            )
        }
      </div>
            

    );
}
}



export {TripsContainer};