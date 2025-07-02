import React from 'react';
// import './FeaturesSection.css';
import featureIcon1 from '../../assets/react.svg';
import featureIcon2 from '../../assets/react.svg';
import featureIcon3 from '../../assets/react.svg';
import featureIcon4 from '../../assets/react.svg';

function FeaturesSection() {
    const features = [
        {
            icon: featureIcon1,
            title: "Intuitive Editor",
            description: "Our drag-and-drop editor makes creating beautiful blog posts easy and intuitive."
        },
        {
            icon: featureIcon2,
            title: "SEO Optimization",
            description: "Built-in SEO tools help your content rank higher in search results."
        },
        {
            icon: featureIcon3,
            title: "Analytics Dashboard",
            description: "Track your performance with comprehensive analytics and insights."
        },
        {
            icon: featureIcon4,
            title: "Monetization Options",
            description: "Multiple ways to monetize your content including subscriptions and ad revenue."
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <h2>Features & Benefits</h2>
                <p className="section-subtitle">Everything you need to succeed as a content creator</p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <img src={feature.icon} alt={feature.title} className="feature-icon" />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;