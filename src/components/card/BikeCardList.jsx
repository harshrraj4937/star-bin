import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import BikeCard from './BikeCard';

const { Title } = Typography;

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBike, setSelectedBike] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(
          'http://localhost:4937/vehicles?location=3&category=2W&fuel_type=Petrol',
          { headers: { 'Content-Type': 'application/json' } }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id,
          image: item.photo_url,
          name: item.model_name,
          price: `₹${item.price}/day`,
          details: item, // Include full details for selected bike view
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

  const handleBack = () => {
    setSelectedBike(null);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Loading bikes...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>{error}</div>;
  }

  if (selectedBike) {
    // Render the detailed view of the selected bike
    const { image, name, price, details } = selectedBike;
    return (
      <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <img src={image} alt={name} style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
          <Title level={3}>{name}</Title>
          <p>{price}</p>
          <p>Engine: {details.engine_cc} cc</p>
          <p>Year: {details.model_year}</p>
          <p>Fuel Type: {details.fuel_type}</p>
          <Button type="primary" onClick={handleBack}>
            Back to Bike List
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ marginBottom: "24px" }}>
          Available Bikes
        </Title>
        <Row gutter={[24, 24]}>
          {bikes.map((bike) => (
            <Col key={bike.id} xs={24} sm={12} md={8} lg={6}>
              <BikeCard
                image={bike.image}
                name={bike.name}
                price={bike.price}
                onClick={() => setSelectedBike(bike)} // Set selected bike
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BikeList;
