import React, { useState } from 'react';
import { Modal, Form, Input, Button, Alert, message } from 'antd';
import moment from 'moment';

const Registration = ({ open, onRegistrationSuccess, onCancel }) => {
  const [form] = Form.useForm();
  const [serverError, setServerError] = useState(null); // State for error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // Track button loading state
  const [isFormValid, setIsFormValid] = useState(false); // Track form validity

  // Track form changes to dynamically update validation state
  const handleFormChange = (_, allFields) => {
    const hasErrors = allFields.some(field => field.errors.length > 0);
    const hasEmptyFields = allFields.some(field => !field.value);
    setIsFormValid(!hasErrors && !hasEmptyFields);
  };

  const handleOk = async () => {
    try {
      setServerError(null); // Clear previous errors
      setIsSubmitting(true); // Set button to loading state
      const values = await form.validateFields(); // Validate form inputs

      // Set fixed role field
      values.role = 'end_user'; // For now, this is always "end_user"

      const response = await fetch('http://localhost:4937/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        // Show success message
        message.success('Registration successful! You can now log in.');

        // Notify the parent component
        onRegistrationSuccess(); // Call parent callback on successful registration
      } else {
        // Handle specific errors
        if (data.error.includes("email already exists")) {
          setServerError(
            <>
              This email is already registered. <a href="/login">Login</a>
            </>
          );
        } else {
          // Handle other errors
          setServerError(data.error);
        }
      }
    } catch (error) {
      console.error('Validation or registration error:', error);
      setServerError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset button state
    }
  };

  return (
    <Modal
      open={open}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          loading={isSubmitting} // Show spinner while processing
          disabled={!isFormValid || isSubmitting} // Disable until form is valid
        >
          Register
        </Button>,
      ]}
      onCancel={onCancel} // Close modal on pressing the X
    >
      <Form
        form={form}
        layout="vertical"
        onFieldsChange={handleFormChange} // Track changes in fields
      >
        {serverError && (
          <Alert
            message={serverError} // Render error message
            type="error"
            showIcon
            style={{ marginBottom: '16px' }}
          />
        )}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
          validateTrigger={['onBlur', 'onChange']} // Trigger validation on blur and change
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
          validateTrigger={['onBlur', 'onChange']} // Trigger validation on blur and change
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="Mobile"
          rules={[{ required: true, message: 'Please enter your mobile number!' }]}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[{ required: true, message: 'Please enter your date of birth!' }]}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Input
            type="date"
            max={moment().format('YYYY-MM-DD')}
            placeholder="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter your password!' },
            { min: 8, message: 'Password must be at least 8 characters long' },
          ]}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
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
          validateTrigger={['onBlur', 'onChange']}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="driving_license"
          label="Driving License"
          rules={[{ required: true, message: 'Please enter your driving license number!' }]}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Registration;
