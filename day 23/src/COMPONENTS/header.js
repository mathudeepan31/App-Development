// src/components/Header.js
import React from 'react';
import './header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
        <Logo/>
      <h1>Home Design and Renovations</h1>
    </header>
  );
};

export default Header;
