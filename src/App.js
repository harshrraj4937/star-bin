import "./App.css";
import Hero from "./components/hero/hero";
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
      <div>
        <p className="title about-title">Why choose us?</p>
        <p className="title">
          Rent a Bike/Motorcycle/Scooty from Boongg and enjoy the convenience of
          affordable two-wheeler options.
        </p>
        <Article />
        {/* Add more content here */}
      </div>
    </footer>
  );
};

const Article = () => {
  return (
    <div className="article-container">
      <div className="image-container">{/* image container */}</div>

      <div className="flex-article-container">
        <div className="box">
          <div className="icon-container">
            <img src="path_to_your_icon.png" alt="icon description" />
          </div>
          <div className="text-container">
            <h3 className="title">Complementary Helmet</h3>
            <p className="caption">
              Your Safety is our priority. We Provide complementary helmets with
              every ride
            </p>
          </div>
        </div>

        <div className="box">
          <div className="icon-container">
            <img src="path_to_your_icon.png" alt="icon description" />
          </div>
          <div className="text-container">
            <h3 className="title">Zero Deposit</h3>
            <p className="caption">complementary helmets with every ride</p>
          </div>
        </div>

        <div className="box">
          <div className="icon-container">
            <img src="path_to_your_icon.png" alt="icon description" />
          </div>
          <div className="text-container">
            <h3 className="title">Lowest Price Guarantee</h3>
            <p className="caption">complementary helmets with every ride</p>
          </div>
        </div>
      </div>
    </div>
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

export default App;
