import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import BikeList from './components/card/BikeCardList';
import FooterSection from './components/footer/FooterSection';

const App = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
            <HeroSection />
            <BikeList />
        </main>
        <FooterSection />
    </div>
);

export default App;
