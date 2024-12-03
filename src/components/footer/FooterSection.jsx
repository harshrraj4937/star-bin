import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const FooterSection = () => (
  <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '30px 50px' }}>
    <Row justify="space-between" align="middle">
      <Col>
        <Text style={{ color: 'white' }}>&copy; 2023 Boongg Clone. All rights reserved.</Text>
      </Col>
      <Col>
        <Space size="large">
          <Text style={{ color: 'white' }}>Privacy Policy</Text>
          <Text style={{ color: 'white' }}>Terms of Service</Text>
          <Text style={{ color: 'white' }}>Contact Us</Text>
        </Space>
      </Col>
    </Row>
  </Footer>
);

export default FooterSection;
