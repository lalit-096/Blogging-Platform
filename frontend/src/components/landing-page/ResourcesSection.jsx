import React from 'react';
// import './ResourcesSection.css';
import resourceImage1 from '../../assets/react.svg';
import resourceImage2 from '../../assets/react.svg';
import resourceImage3 from '../../assets/react.svg';

function ResourcesSection() {
    const resources = [
        {
            image: resourceImage1,
            title: "Blogging 101 Guide",
            description: "Learn the fundamentals of successful blogging with our comprehensive guide."
        },
        {
            image: resourceImage2,
            title: "SEO Masterclass",
            description: "Master the art of search engine optimization to grow your audience."
        },
        {
            image: resourceImage3,
            title: "Content Monetization Strategies",
            description: "Discover proven strategies to monetize your content effectively."
        }
    ];

    return (
        <section className="resources-section" id="resources">
            <div className="resources-container">
                <h2>Resources</h2>
                <p className="section-subtitle">Helpful guides and tutorials to enhance your blogging journey</p>

                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <div key={index} className="resource-card">
                            <img src={resource.image} alt={resource.title} className="resource-image" />
                            <h3>{resource.title}</h3>
                            <p>{resource.description}</p>
                            <a href="#" className="resource-link">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ResourcesSection;