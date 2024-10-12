import "./App.css";
import scootyImage from './assets/images/hero-image.jpg';  // Adjust the path based on your folder structure

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <p>Why choose us?</p>
        {/* Add more content here */}
      </div>
    </footer>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo" alt="Boongg Logo" />
      </div>
      <nav className="nav">
        <a href="#prices">Prices</a>
        <a href="#partner">Become a Partner</a>
        <a href="#monthly-rental">Monthly Bike Rental</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
};



const Hero = () => {
  return (
      <div className="hero">
          <h1>
              Rent Bike & Scooty Now In <span>Your City</span>
          </h1>
          <p>10k+ | 4.6 Rating</p>

          {/* Rental Info Section */}
          <div className="rental-info">
              <div className="rental-card">
                  <p>Hourly Bike Rental</p>
                  <p>Starts @ ₹39*</p>
              </div>
              <div className="rental-card">
                  <p>Daily Bike Rental</p>
                  <p>Starts @ ₹349*</p>
              </div>
              <div className="rental-card">
                  <p>Monthly Bike Rental</p>
                  <p>Starts @ ₹3999*</p>
              </div>
          </div>

          {/* Scooty Image Section */}
          <div className="scooty-container">
              <img src={scootyImage} alt="Scooty" className="scooty-image" />
          </div>

          {/* Booking Form Section */}
          <div className="booking-form">
              <div className="form-group">
                  <label>Current City</label>
                  <input type="text" placeholder="Select City" />
              </div>
              <div className="form-group">
                  <label>Start Date and Time</label>
                  <input type="datetime-local" />
              </div>
              <div className="form-group">
                  <label>End Date and Time</label>
                  <input type="datetime-local" />
              </div>
              <button className="rent-now-btn">Rent Now</button>
          </div>
      </div>
  );
};

export default App;
