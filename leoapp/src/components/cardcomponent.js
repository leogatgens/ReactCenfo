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
      title="Registra tus viajes"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Enumera tus proximos viajes"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
    );
}

export {ContenedorCards};