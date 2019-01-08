import { Card,Button } from 'antd';
import React from 'react';



const CountryCard = (props) =>{

    return(
        <div>
        <Card title={props.data} bordered={false} style={{ width: '100%', marginTop:10}}>
          <p>Continente: NOMBRE CONTINENTE  </p>
          <p>Capital: NOMBRE CAPITAL </p>
          <p>Click here for information about   <a href={"https://www.google.com/search?q=" + props.data }   target="_blank" rel="noopener noreferrer">{props.data}</a></p>
        
          <Button icon="plus" size="large">Add to list</Button>
        </Card>
      </div>
    );

}

export {CountryCard};