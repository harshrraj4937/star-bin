import "./hero.css";


const Hero = () => {
    return (
      <div className="scooty-container">
        <div className="hero">
          <h1>
            Rent Bike & Scooty Now In <span>Your City</span>
          </h1>
          <p>10k+ | 4.6 Rating</p>
  
          {/* Rental Info Section */}
          {/* <div className="rental-info">
                <div className="rental-card board1">
                    <p>Hourly Bike Rental</p>
                    <p>Starts @ ₹39*</p>
                </div>
                <div className="rental-card board2">
                    <p>Daily Bike Rental</p>
                    <p>Starts @ ₹349*</p>
                </div>
                <div className="rental-card">
                    <p>Monthly Bike Rental</p>
                    <p>Starts @ ₹3999*</p>
                </div>
            </div> */}
  
          {/* Scooty Image Section */}
  
          {/* Booking Form Section */}
          <div className="booking-form">
            <div className="form-group first-row">
              <label className="form-label">Current City</label>
              <input type="text" placeholder="Select City" />
            </div>
  
            <div className="second-row">
              <div className="form-group">
                <label className="form-label">Start Date and Time</label>
                <input type="datetime-local" />
              </div>
              <div className="form-group">
                <label className="form-label">End Date and Time</label>
                <input type="datetime-local" />
              </div>
            </div>
  
            <button className="rent-now-btn">Rent Now</button>
          </div>
        </div>
      </div>
    );
  };
export default Hero;  