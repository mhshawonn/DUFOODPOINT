import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/food/assets/frontend_assets/assets'; 
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState('home');
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    return (
        <div className='navbar'> 
            <Link></Link>
            <img src={assets.logo} className='logo' alt="Logo" />

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>

            {/* Navbar Menu */}
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                <li className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</li>
                <li className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</li>
                <li className={menu === 'mobile' ? 'active' : ''} onClick={() => setMenu('mobile')}>Mobile</li>
                <li className={menu === 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Navbar Right */}
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="search-icon">
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className="dot"></div>
                </div>
                <button ><Link to='/login'> Sign In </Link></button>
            </div>
        </div>
    );
}

export default Navbar;
