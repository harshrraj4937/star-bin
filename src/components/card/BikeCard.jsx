import React from 'react';
import { Card, Button } from 'antd';

const BikeCard = ({ image, name, price }) => (
  <Card
    hoverable
    cover={
      <img
        alt={name}
        src={image}
        style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }}
      />
    }
    style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
  >
    <Card.Meta title={name} description={`Price: ${price}`} />
    <Button type="primary" style={{ marginTop: "16px", width: "100%" }}>
      Book Now
    </Button>
  </Card>
);

export default BikeCard;
