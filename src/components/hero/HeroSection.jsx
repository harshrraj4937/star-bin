import React, { useState } from 'react';
import { Typography, Button, Modal } from 'antd';
import CityModal from '../modal/model'; 

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

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
        width={600}
        footer={null} // Custom footer for this modal
      >
        <CityModal /> 
      </Modal>
    </div>
  );
};

export default HeroSection;
