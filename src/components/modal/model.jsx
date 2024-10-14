import React from 'react';
import "./model.css";

export default function Home() {
    const popularCities = [
        { name: 'Pune', icon: '/icons/pune.png' },
        { name: 'Hyderabad', icon: '/icons/Vizag.png' },
        { name: 'Navi Mumbai', icon: '/icons/mumbai.b2d8933c.jpg' },
        { name: 'Bangalore', icon: '/icons/Bangalore.png' },
        { name: 'Nagpur', icon: '/icons/Nagpur.png' },
        { name: 'Nashik', icon: '/icons/Nashik.png' },
      ];
      
      

  const otherCities = [
    'Aurangabad', 'Kolhapur', 'Vizag', 'Udaipur', 'Mumbai', 'Goa', 'Delhi',
    'Jaipur', 'Belgaum', 'Hubali', 'Navi Mumbai', 'Chennai'
  ];

  return (
    <div className="modal">
      <div className="searchBar">
        <input type="text" placeholder="Search your city" />
      </div>
      <div className="citiesSection">
        <h3>Popular Cities</h3>
        <div className="popularCities">
          {popularCities.map((city, index) => (
            <div key={index} className="city">
              <img src={city.icon} alt={`${city.name} Icon`} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="citiesSection">
        <h3>Other Cities</h3>
        <div className="otherCities">
          {otherCities.map((city, index) => (
            <p key={index} className="cityItem">{city}</p>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>Available at</p>
      </div>

      <style jsx>{`
      `}</style>
    </div>
  );
}
