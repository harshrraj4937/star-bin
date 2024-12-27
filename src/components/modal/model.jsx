import React, { useState, useEffect } from 'react';
import { Row, Col, Card,} from 'antd';

const CityModal = ({ onSelectCity }) => {
  const [searchValue,] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cities from the API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:4937/cities', {
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        setCities(
          data.map((city) => ({
            ...city,
            image: city.photo_url.Valid
              ? city.photo_url.String
              : 'https://placehold.co/300x200?text=No+Image',
          }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="relative mb-6">
        {/* <Input
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
        /> */}
      </div>

      {loading ? (
        <p>Loading cities...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <Row gutter={[16, 16]}>
          {filteredCities.map((city) => (
            <Col xs={12} sm={8} md={6} key={city.id}>
              <Card
                hoverable
                cover={<img alt={city.name} src={city.image} />}
                onClick={() => onSelectCity(city)} // Call the onSelectCity function when a city is clicked
              >
                <Card.Meta
                  title={
                    <span
                      style={{
                        display: 'block',
                        height: '1.5em',
                        lineHeight: '1.5em',
                        overflow: 'hidden',
                      }}
                    >
                      {city.name}
                    </span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CityModal;
