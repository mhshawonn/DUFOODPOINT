import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <h2>Order Your Favorite Food Here</h2>
        <p>Choose from a wide variety of delicious dishes, freshly made for you.</p>
        <button className="menu-btn">View Menu</button>
      </div>
    </header>
  );
}

export default Header;
