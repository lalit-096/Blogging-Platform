import React from 'react';
import '../../assets/css/LandingPage/footer.css';
import logo from '../../assets/react.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="BlogPlatform Logo" className="logo" />
                    <h2>BlogPlatform</h2>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h3>Platform</h3>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="link-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div className="link-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div className="link-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">Instagram</a>
                        <a href="#" className="social-icon">LinkedIn</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} BlogPlatform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;