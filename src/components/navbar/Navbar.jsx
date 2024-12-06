import React, { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import Login from '../login/Login';
import jwt_decode from 'jwt-decode';
const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Please enter your login details.');
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUserName(decoded.name);
      } catch (err) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
    }
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async (values) => {
    const response = await fetch('http://localhost:4937/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      const decoded = jwt_decode(data.access_token);
      setUserName(decoded.name);
      setModalText('Login successful!');
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    } else {
      setModalText(data.error || 'Login failed.');
    }
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUserName(null);
  };

  const menuItems = [
    { key: '1', label: 'Profile' },
    { key: '2', label: 'Logout', onClick: handleLogout },
  ];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={{ float: 'right', color: '#fff', fontSize: '18px' }}>
          Hello Rides
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Start Partnering' },
            { key: '3', label: 'Services' },
            {
              key: '4',
              label: userName ? (
                <Dropdown overlay={<Menu items={menuItems} />}>
                  <Button type="text">{`Welcome, ${userName}`}</Button>
                </Dropdown>
              ) : (
                <Button type="text" onClick={showModal}>
                  Login
                </Button>
              ),
            },
          ]}
        />
      </Header>

      <Login
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        modalText={modalText}
      />
    </Layout>
  );
};

export default Navbar;
