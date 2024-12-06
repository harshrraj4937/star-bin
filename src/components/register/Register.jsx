import React, { useState } from 'react';
import { Modal, Input, Button, Form, notification } from 'antd';
import moment from 'moment';  // Import moment for date handling

const Registration = ({ open, onRegistrationSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const registrationData = {
        ...values,
        role: 'end_user', // Add the role here
      };
    

    try {
      // Send the registration data to the server
      const registerResponse = await fetch('http://localhost:4937/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });

      const registerResult = await registerResponse.json();

      if (registerResult.message === "User registered successfully") {
        // Registration successful
        notification.success({
          message: 'Registration Successful!',
          description: 'You can now log in with your credentials.',
        });
        onCancel();  // Close the modal on success
      } else {
        // If the registration failed (e.g., email already in use)
        notification.error({
          message: 'Registration Failed',
          description: registerResult.error || 'Please try again.',
        });
      }
    } catch (error) {
      console.error('Error during registration', error);
      setLoading(false);
      notification.error({ message: 'An unexpected error occurred. Please try again.' });
    }

    setLoading(false);
  };

  return (
    <Modal
      visible={open}
      onCancel={onCancel}
      footer={null}
      title="Register"
    >
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[{ required: true, message: 'Please input your mobile number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Please input your date of birth!' }]}
        >
          <Input 
            type="date" 
            value={moment().format('YYYY-MM-DD')} 
            onChange={e => e.preventDefault()} 
          />
        </Form.Item>

        <Form.Item
          label="Driving License"
          name="driving_license"
          rules={[{ required: true, message: 'Please input your driving license number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Registration;
