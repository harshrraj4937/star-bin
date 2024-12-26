import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import BikeCard from './BikeCard';

const { Title } = Typography;

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        // Todo Remember!
        // curently we are getting static city id the idea is as we grow most poplar vehicles will get listed
        // and as the city is selected we show vehicles based on the selected district city taluka etc 
        const response = await fetch(
          'http://localhost:4937/vehicles?location=3&category=2W&fuel_type=Petrol',
          { headers: { 'Content-Type': 'application/json' } }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        // Transform the API data to match the structure used in BikeCard
        const formattedData = data.map((item) => ({
          image: item.photo_url,
          name: item.model_name,
          price: `₹${item.price / 1}/day`, // Assuming price is in cents
        }));
        setBikes(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Loading bikes...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>{error}</div>;
  }

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
