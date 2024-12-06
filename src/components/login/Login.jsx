import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";

const Login = ({ open, onOk, onCancel }) => {
    const [form] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [userName, setUserName] = useState("");

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            setConfirmLoading(true);

            const response = await axios.post("http://localhost:4937/auth/login", {
                email: values.username,
                password: values.password,
            });

            const { access_token } = response.data;
            const decodedToken = JSON.parse(atob(access_token.split(".")[1]));
            setUserName(decodedToken.name);

            message.success("Login successful");
            onOk();
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.error || "Login failed");
            } else {
                message.error("An unexpected error occurred");
            }
        } finally {
            setConfirmLoading(false);
        }
    };

    return (
        <>
            <Modal
                title="Login"
                open={open}
                footer={null}
                onCancel={onCancel}
            >
                <Form form={form} name="login" initialValues={{ remember: true }}>
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
                        <Button type="primary" htmlType="submit" onClick={handleOk} className="w-full">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Login;
