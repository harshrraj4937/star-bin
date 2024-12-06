import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const Login = ({ open, onOk, onCancel, confirmLoading, modalText }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onOk(values);
      })
      .catch((info) => {
        console.error('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="Login"
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <p>{modalText}</p>
      <Form form={form} name="login" initialValues={{ remember: true }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmit} className="w-full">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
