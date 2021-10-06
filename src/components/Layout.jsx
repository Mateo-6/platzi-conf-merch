import React from 'react'

// Components
import Header from './Header';
import Footer from './Footer';

// Styles
import '../styles/components/Layout.css';

const Layout = ({ children }) => (
    <div className="Main">
        <Header />
        {children}
        <Footer />
    </div>
);


export default Layout;
