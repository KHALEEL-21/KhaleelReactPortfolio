import React from 'react';
import ThemeToggle from './ThemeToggle';
import ColorPicker from './ColorPicker';
import './Header.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="left-branding">
        <h1 className="name">Khaleelullah Sheriff</h1>
        <p className="role">React Developer • 1.5 Years of Experience</p>
      </div>
      <div className="right-controls">
        <ThemeToggle />
        <ColorPicker />
      </div>
    </header>
  );
}

export default Header;
