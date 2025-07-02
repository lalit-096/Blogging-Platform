import React, { useState } from 'react';
// import './SliderSection.css';

function SliderSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            headline: "Start Your Writing Journey",
            description: "Our platform provides all the tools you need to create, publish, and monetize your content. Begin your blogging journey today!",
            btnText: "Join Now"
        },
        {
            headline: "Grow Your Audience",
            description: "Connect with millions of readers worldwide. Our SEO-optimized platform helps your content reach the right audience.",
            btnText: "Join Now"
        },
        {
            headline: "Monetize Your Content",
            description: "Turn your passion into profit with our diverse monetization options including subscriptions, affiliate marketing, and more.",
            btnText: "Join Now"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="slider-section">
            <div className="slider-container">
                <button className="slider-arrow prev" onClick={prevSlide}>&#10094;</button>

                <div className="slider-content">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <h2>{slide.headline}</h2>
                            <p>{slide.description}</p>
                            <button className="join-button">{slide.btnText}</button>
                        </div>
                    ))}
                </div>

                <button className="slider-arrow next" onClick={nextSlide}>&#10095;</button>

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SliderSection;