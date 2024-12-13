import React from 'react';
import { Row, Col, Typography } from 'antd';
import BikeCard from './BikeCard';

const { Title } = Typography;

const BikeList = () => {
  const bikes = [
    { image: 'https://placehold.co/300x200?text=R15%0A+V4&font=roboto', name: 'Sporty Bike', price: '$15/day' },
    { image: 'https://placehold.co/300x200?text=Himalayan%0A+450&font=roboto', name: 'Mountain Bike', price: '$18/day' },
    { image: 'https://placehold.co/300x200?text=OLA%0A+S1Pro&font=roboto', name: 'Electric Scooter', price: '$25/day' },
    { image: "https://placehold.co/300x200?text=ThunderBird%0A350X&font=roboto", name: 'Classic Bike', price: '$12/day' },
  ];

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Available Bikes
        </Title>
        <Row gutter={[24, 24]}>
          {bikes.map((bike, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <BikeCard image={bike.image} name={bike.name} price={bike.price} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BikeList;
