import React, { useState } from 'react';
import { Input, Button, Card, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



const cities = [
  { name: 'Agra', image: 'https://storage.googleapis.com/a1aa/image/cPIXswjGOZYoDBdErXWiAwoL7Z2m36K6oH4cXhjkh06qeWfTA.jpg' },
  { name: 'Ahmedabad', image: 'https://storage.googleapis.com/a1aa/image/Q7bqd5NlkNqCFRLYGQffXzCSgps00rjIs2kYhEOY1Dn46tenA.jpg' },
  { name: 'Bangalore', image: 'https://storage.googleapis.com/a1aa/image/pFBbpb9y2YoHANKTmxUOkrWC09ySigofdfR684NPXoN86tenA.jpg' },
  { name: 'Bangalore Airport', image: 'https://storage.googleapis.com/a1aa/image/9eptnFfwjZhHukys910FzLBuKeE9nU2aXpWLUoG9IpVb1b9nA.jpg' },
  { name: 'Belagavi', image: 'https://storage.googleapis.com/a1aa/image/XeSL0c3ixem2ikjYVA8gFjrJjIKMIVcYyJH7ayIJyYw26tenA.jpg' },
  { name: 'Bhubaneswar', image: 'https://storage.googleapis.com/a1aa/image/OELMey3WXfoBW0sbugrfa3eQFECMdMYqFcTVnnzcdEXLr36PB.jpg' },
  { name: 'Calicut', image: 'https://storage.googleapis.com/a1aa/image/cETVprAsLXb8J1DdB9jklVewkmp1RfoMhSQ7VUnWB3vg6tenA.jpg' },
  { name: 'Chandigarh', image: 'https://storage.googleapis.com/a1aa/image/bRKJbAuJXq61IJYjWfOTFEIvbMJ8sCUXi3c60HIpuCBd9WfTA.jpg' },
  { name: 'Chikmagalur', image: 'https://storage.googleapis.com/a1aa/image/xPAW9zGdl9YuMJd4T47BbD1r9GPi6btJ0qObYg0IG4kpeWfTA.jpg' },
  { name: 'Cochin', image: 'https://storage.googleapis.com/a1aa/image/LDFMqf86Gl2HAyoHQuVHtVzLU5Jm2eJGK2GHTFcvW3Qf0b9nA.jpg' },
  { name: 'Coorg', image: 'https://storage.googleapis.com/a1aa/image/00QuPLG7vl5EOZiKe9hWf2IzuLV9dSrA8Z4TevDbhtKJ1b9nA.jpg' },
  { name: 'Delhi', image: 'https://storage.googleapis.com/a1aa/image/vynnPEx13o6XFBszkEBp0jn8kK2G3ERC8EULgBrh9jYseWfTA.jpg' },
  { name: 'Gandhinagar', image: 'https://storage.googleapis.com/a1aa/image/NTXSLUNSAwIkDdw6VW4U33bAvUXxjmQQHmzcCzaAxPWqeWfTA.jpg' },
  { name: 'Guntur', image: 'https://storage.googleapis.com/a1aa/image/o2ftrM3dvVQRHib6JdU1iwein2MMW7a9DtoUhykkCAQv6tenA.jpg' },
  { name: 'Gurugram', image: 'https://storage.googleapis.com/a1aa/image/cbdb5dK6al4hNZMOOnlp3z8rk7fYSTJpvKZOPRvszJMa9WfTA.jpg' },
];

const CityModal = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="relative mb-6">
        <Input
          placeholder="Search or type city to select"
          prefix={<SearchOutlined className="text-gray-400" />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          suffix={
            searchValue && (
              <Button type="text" onClick={() => setSearchValue('')}>
                Clear
              </Button>
            )
          }
        />
      </div>

      <Row gutter={[16, 16]}>
        {filteredCities.map((city) => (
          <Col xs={12} sm={8} md={6} key={city.name}>
            <Card
              hoverable
              cover={<img alt={city.name} src={city.image} />}
            >
              <Card.Meta title={city.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CityModal;
