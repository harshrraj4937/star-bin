import React, { useState } from "react";
import { Layout, Menu, Modal, Form, Input, Button } from "antd";

const { Header } = Layout;

const Navbar = () => {
  // State to manage modal visibility
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Please enter your login details.');

  // Show modal
  const showModal = () => {
    setOpen(true);
  };

  // Handle "Ok" button click (simulate async login action)
  const handleOk = async () => {
    setModalText('Processing your login...');
    setConfirmLoading(true);
    
    // Simulating async login processing with a timeout (e.g., API call)
    setTimeout(() => {
      setModalText('Login successful!');
      setConfirmLoading(false);
      setTimeout(() => {
        setOpen(false);  // Close modal after another delay
      }, 1000);
    }, 2000); // Simulate 2 seconds delay
  };

  // Handle "Cancel" button click
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          className="logo"
          style={{ float: "right", color: "#fff", fontSize: "18px" }}
        >
          Hello Rides
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: "Home" },
            { key: "2", label: "Start Partnering" },
            { key: "3", label: "Services" },
            // Login button that triggers the modal
            { key: "4", label: "Login", onClick: showModal },
          ]}
        />
      </Header>

      {/* Modal for Login */}
      <Modal
        title="Login"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form name="login" initialValues={{ remember: true }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
        <p>{modalText}</p>
      </Modal>
    </Layout>
  );
};

export default Navbar;
