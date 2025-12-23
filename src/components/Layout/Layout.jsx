import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppWidget from '../WhatsAppWidget';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, position: 'relative' }}>
                {children}
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default Layout;
