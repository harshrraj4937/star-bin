// src/components/Layout.js
import React from 'react';
import Navbar from '../navbar/Navbar';
import FooterSection from '../footer/FooterSection';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <FooterSection />
        </div>
    );
};

export default Layout;