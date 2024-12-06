import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import {jwtDecode} from "jwt-decode";

const Login = ({ open, onLoginSuccess, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const response = await fetch('http://localhost:4937/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        // Save tokens to localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

        // Decode token to get the name
        const decodedToken = jwtDecode(data.access_token);

        // Notify the parent component
        onLoginSuccess(decodedToken); // Call parent callback with decoded token
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Validation or login error:', error);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Login
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
