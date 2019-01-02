import { Card } from 'antd';
import React from 'react';



const ContenedorCards = () => {
    return(
        <Card title="Un diario de tus viajes">
    <p
      style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
      Vive tus viajes una y otra vez
    </p>
    <Card
      type="inner"
      style={{ width: 300 }}
      title="Registra tus viajes"
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      extra={<a href="#">More</a>}
    >
      Registra tus viajes, las fechas y los lugares que visitados.
    </Card>
    <Card
      style={{ marginTop: 16, width: 450 }}
      type="inner"
      cover={<img alt="example" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-545676.jpg" />}
      title="Enumera tus proximos viajes"
      extra={<a href="#">More</a>}
    >
      Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.
    </Card>
  </Card>
    );
}

export {ContenedorCards};