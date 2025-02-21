import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TechTalk Festival 2025</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#program">Programma</a></li>
          <li><a href="#speakers">Speaker</a></li>
          <li><a href="#workshops">Workshop</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
