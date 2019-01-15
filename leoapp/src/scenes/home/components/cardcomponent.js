import { Card } from 'antd';
import React from 'react';



const ContenedorCardsMobile = () => {
    return(
        <Card title="Crea un diario de tus viajes">
   
    <Card
      type="inner"
      style={{ width: 300 }}
      title="Registra tus viajes"
      cover={<img alt="example" src="https://yourtrips.azurewebsites.net/img/travel1.jpg"  />}
      extra={<a href="https://ant.design/components/list/">More</a>}
    >
      Registra tus viajes, las fechas y los lugares que visitados.
    </Card>
    <Card
      style={{ marginTop: 16, width: 300 }}
      type="inner"
      cover={<img alt="example" src="https://yourtrips.azurewebsites.net/img/traveltime.jpg" />}
      title="Enumera tus proximos viajes"
      extra={<a href="https://ant.design/components/list/">More</a>}
    >
      Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.
    </Card>
  </Card>
    );
}

export {ContenedorCardsMobile};