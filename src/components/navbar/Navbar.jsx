import React, { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import Login from '../login/Login';
import { jwtDecode } from "jwt-decode";

const { Header } = Layout;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  // Check if the user is already logged in (on page load)
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken); // Decode the JWT token
        setUserName(decodedToken.name); // Set the name from the token
      } catch (error) {
        console.error('Token decoding error:', error);
      }
    }
  }, []); // Runs once on mount

  const showModal = () => {
    setOpen(true);
  };

  const handleLoginSuccess = (decodedToken) => {
    setUserName(decodedToken.name); // Update the username on successful login
    setOpen(false); // Close the login modal
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
                <Dropdown menu={{ items: menuItems }}>
                  <Button type="text" style={{ color: '#ffffff' }}>{`Welcome, ${userName}`}</Button>
                </Dropdown>
              ) : (
                <Button type="text" onClick={showModal} style={{ color: '#ffffff' }}>
                  Login
                </Button>
              ),
            },
          ]}
        />
      </Header>

      <Login
        open={open}
        onLoginSuccess={handleLoginSuccess} // Pass callback to Login component
        onCancel={() => setOpen(false)}
      />
    </Layout>
  );
};

export default Navbar;
