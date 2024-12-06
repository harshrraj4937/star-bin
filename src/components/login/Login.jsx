import React, { useState } from 'react';
import { Modal, Form, Input, Button, Alert, message } from 'antd';
import {jwtDecode} from "jwt-decode";

const Login = ({ open, onLoginSuccess, onCancel }) => {
  const [form] = Form.useForm();
  const [serverError, setServerError] = useState(null); // State for error messages

  const handleOk = async () => {
    try {
      setServerError(null); // Clear previous errors
      const values = await form.validateFields(); // Validate form inputs

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

        // Show success toast
        message.success(`Welcome back, ${decodedToken.name || 'User'}!`);

        // Notify the parent component
        onLoginSuccess(decodedToken); // Call parent callback with decoded token
      } else {
        // Handle specific errors
        if (data.error.includes("invalid password")) {
          setServerError(
            <>
              Incorrect password. Perhaps <a href="/forgot-password">Forgot Password?</a>
            </>
          );
        } else if (data.error.includes("user not found")) {
          setServerError(
            <>
              User not found. Would you like to <a href="/register">Register?</a>
            </>
          );
        } else {
          // Handle other errors
          setServerError(data.error);
        }
      }
    } catch (error) {
      console.error('Validation or login error:', error);
      setServerError('An unexpected error occurred. Please try again.');
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
        {serverError && (
          <Alert
            message={serverError} // Render error message
            type="error"
            showIcon
            style={{ marginBottom: '16px' }}
          />
        )}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
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
