import React from 'react';
import '../../assets/css/LandingPage/heroSection.css';
import heroImage from '../../assets/react.svg';

function HeroSection() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <img src={heroImage} alt="Blogging Platform" className="hero-image" />

                <div className="hero-text-overlay">
                    <h1>Transform Your Ideas Into Engaging Content</h1>
                    <p>The ultimate platform for writers, creators, and thought leaders</p>
                    <button className="cta-button">Get Started</button>
                </div>

                <div className="hero-bottom-text">
                    <div className="text-box">
                        <h3>10K+</h3>
                        <p>Active Writers</p>
                    </div>
                    <div className="text-box">
                        <h3>5M+</h3>
                        <p>Monthly Readers</p>
                    </div>
                    <div className="text-box">
                        <h3>500K+</h3>
                        <p>Published Articles</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;