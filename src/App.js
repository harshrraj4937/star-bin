import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'; // Import the Layout component
import HeroSection from './components/hero/HeroSection';
import BikeList from './components/card/BikeCardList';
import ProductPage from './components/productpage/ProductPage';

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <BikeList />
                    </>
                } />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
        </Layout>
    </Router>
);

export default App;