import React from 'react';
// import './Header.css';
import logo from '../../assets/react.svg';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="BlogPlatform Logo" className="logo" />
                <h1>BlogPlatform</h1>
            </div>

            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#locations">Locations</a></li>
                </ul>
            </nav>

            <div className="contact-info">
                <a href="tel:+1234567890" className="phone">+123 456 7890</a>
                <a href="mailto:info@blogplatform.com" className="email">info@blogplatform.com</a>
                <button className="contact-button">Contact Us</button>
            </div>
        </header>
    );
}

export default Header;