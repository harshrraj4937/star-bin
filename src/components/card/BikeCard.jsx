import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const BikeCard = ({ image, name, price, onClick }) => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleBookNow = (e) => {
    e.stopPropagation(); // Prevent triggering onClick of the Card
    navigate('/product'); // Navigate to the product route
  };

  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<img alt={name} src={image} style={{ height: "200px", objectFit: "cover" }} />}
      onClick={onClick} // Trigger onClick when the card is clicked
    >
      <Card.Meta title={name} description={price} />
      <Button type="primary" style={{ marginTop: "16px", width: "100%" }} onClick={handleBookNow}>
        Book Now
      </Button>
    </Card>
  );
};

export default BikeCard;
