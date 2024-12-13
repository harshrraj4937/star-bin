import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const BikeCard = ({ image, name, price }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleBookNow = () => {
    navigate('/product'); // Use navigate to change routes
  };

  return (
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
      <Button type="primary" style={{ marginTop: "16px", width: "100%" }} onClick={handleBookNow}>
        Book Now
      </Button>
    </Card>
  );
};

export default BikeCard;