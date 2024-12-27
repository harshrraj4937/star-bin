import React, { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown, Button, Modal } from 'antd';
import Login from '../login/Login';
import CityModal from '../modal/model';
import Registration from '../register/Register';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userName, setUserName] = useState(null);
  const [citySelected, setCitySelected] = useState(false);
  const [openCityModal, setOpenCityModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        setUserName(decodedToken.name);
      } catch (error) {
        console.error('Token decoding error:', error);
      }
    }
    if (!citySelected) {
      setOpenCityModal(true);
    }
  }, [citySelected]);

  const showLoginModal = () => {
    setOpenLogin(true);
  };

  const showRegisterModal = () => {
    setOpenRegister(true);
  };

  const handleLoginSuccess = (decodedToken) => {
    setUserName(decodedToken.name);
    setOpenLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUserName(null);
  };

  const handleCityModalOk = () => {
    setCitySelected(true);
    setOpenCityModal(false);
  };

  const handleCityModalCancel = () => {
    setOpenCityModal(false);
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
        <div className="logo" style={{ float: 'right', color: '#fff', fontSize: '18px' }}>
          <Button
            type="text"
            style={{
              color: '#fff',
              background: 'transparent',
              border: '1px solid #fff',
              marginRight: '16px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
            onClick={() => setOpenCityModal(true)}
          >
            Select Location
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'Home', onClick: () => navigate('/') },
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

      <Modal
        title="Select Your City"
        open={openCityModal}
        onOk={handleCityModalOk}
        onCancel={handleCityModalCancel}
        width={600}
        footer={null}>
        <CityModal />
      </Modal>

      <Login
        open={openLogin}
        onLoginSuccess={handleLoginSuccess}
        onCancel={() => setOpenLogin(false)}
      />
      <Registration
        open={openRegister}
        onRegistrationSuccess={handleLoginSuccess}
        onCancel={() => setOpenRegister(false)}
      />
    </Layout>
  );
};

export default Navbar;
