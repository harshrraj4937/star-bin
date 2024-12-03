import React, { useState } from 'react';
import { Typography, Button, Modal, Input, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  const popularCities = [
    { name: 'Pune', icon: '/images/pune.png' },
    { name: 'Hyderabad', icon: '/images/Vizag.png' },
    { name: 'Navi Mumbai', icon: '/images/mumbai.b2d8933c.jpg' },
    { name: 'Bangalore', icon: '/images/Bangalore.png' },
    { name: 'Nagpur', icon: '/images/Nagpur.png' },
    { name: 'Nashik', icon: '/images/Nashik.png' },
  ];

  const otherCities = [
    'Aurangabad', 'Kolhapur', 'Vizag', 'Udaipur', 'Mumbai', 'Goa', 'Delhi',
    'Jaipur', 'Belgaum', 'Hubali', 'Navi Mumbai', 'Chennai'
  ];

  const handleOk = () => {
    setOpen(false); // Close the modal
  };

  const handleCancel = () => {
    setOpen(false); // Close the modal
  };

  const showModal = () => {
    setOpen(true); // Open the modal
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#f0f2f5", padding: "80px 20px" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <Title level={1} style={{ fontSize: "48px", fontWeight: "bold" }}>
            Rent a Bike with Ease
          </Title>
          <Paragraph style={{ fontSize: "18px", marginBottom: "40px" }}>
            Choose from a wide range of bikes and scooters
          </Paragraph>
          <Button type="primary" size="large" onClick={showModal}>
            Select Your City
          </Button>
        </div>
      </section>

      {/* Modal for City Selection */}
      <Modal
        title="Select Your City"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={450}
        footer={null} // Custom footer for this modal
      >
        <div className="searchBar">
          <Input
            placeholder="Search your city"
            style={{ width: '100%', marginBottom: 20 }}
          />
        </div>
        <div className="citiesSection">
          <h3>Popular Cities</h3>
          <Row gutter={[16, 16]} justify="center">
            {popularCities.map((city, index) => (
              <Col key={index} xs={8} sm={6} md={4}>
                <div className="city">
                  <img src={city.icon} alt={`${city.name} Icon`} width={40} height={40} />
                  <p>{city.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="citiesSection">
          <h3>Other Cities</h3>
          <Row gutter={[16, 16]} justify="center">
            {otherCities.map((city, index) => (
              <Col key={index} xs={8} sm={6} md={4}>
                <p className="cityItem">{city}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="footer">
          <p>Available at</p>
        </div>
      </Modal>

      <style jsx>{`
        .searchBar input {
          width: 100%;
          padding: 12px;
          border-radius: 5px;
          font-size: 16px;
        }

 .citiesSection {
    margin-bottom: 20px;
    display: flex; /* Flexbox to ensure items align in a row */
    flex-wrap: nowrap; /* Prevent wrapping */
    overflow-x: auto; /* Allow horizontal scrolling */
    padding: 5px 0; /* Add padding to avoid text touching edges */
  } 

        .citiesSection h3 {
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .city {
          text-align: center;
        }

        .city img {
          margin-bottom: 5px;
        }

        .city p {
          font-size: 14px;
        }

        .cityItem {
          font-size: 14px;
          margin: 5px;
          cursor: pointer;
        }

        .footer {
          border-top: 1px solid #ccc;
          padding-top: 10px;
          margin-top: 20px;
        }

        .footer p {
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
