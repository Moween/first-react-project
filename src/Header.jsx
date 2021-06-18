import React from 'react';
import Navbar from './Navbar';
import logo from './logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img 
          src={logo}
          alt="brand-logo"
          className="brand-logo"
        />  
      </div>
      <Navbar />
    </header>
  )
}

export default Header;