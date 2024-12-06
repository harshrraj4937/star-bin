import React, { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import Login from '../login/Login';
import Registration from '../register/Register'; // Import the Registration component
import { jwtDecode } from "jwt-decode";

const { Header } = Layout;

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false); // For Login modal visibility
  const [openRegister, setOpenRegister] = useState(false); // For Register modal visibility
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

  const showLoginModal = () => {
    setOpenLogin(true);
  };

  const showRegisterModal = () => {
    setOpenRegister(true);
  };

  const handleLoginSuccess = (decodedToken) => {
    setUserName(decodedToken.name); // Update the username on successful login
    setOpenLogin(false); // Close the login modal
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
                <>
                  <Button type="text" onClick={showLoginModal} style={{ color: '#ffffff' }}>
                    Login
                  </Button>/
                  <Button type="text" onClick={showRegisterModal} style={{ color: '#ffffff' }}>
                    Register
                  </Button>
                </>
              ),
            },
          ]}
        />
      </Header>

      <Login
        open={openLogin}
        onLoginSuccess={handleLoginSuccess}
        onCancel={() => setOpenLogin(false)}
      />
      <Registration
        open={openRegister}
        onRegistrationSuccess={handleLoginSuccess} // Assuming registration also triggers login success
        onCancel={() => setOpenRegister(false)}
      />
    </Layout>
  );
};

export default Navbar;
