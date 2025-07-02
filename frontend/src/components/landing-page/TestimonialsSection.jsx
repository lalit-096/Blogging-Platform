import React from 'react';
// import './TestimonialsSection.css';
import avatar1 from '../../assets/react.svg';
import avatar2 from '../../assets/react.svg';
import avatar3 from '../../assets/react.svg';

function TestimonialsSection() {
    const testimonials = [
        {
            quote: "This platform transformed my hobby into a full-time career. The tools and audience reach are unmatched!",
            author: "Sarah Johnson",
            role: "Travel Blogger",
            avatar: avatar1
        },
        {
            quote: "The analytics tools helped me understand my audience better and create more engaging content.",
            author: "Michael Chen",
            role: "Tech Blogger",
            avatar: avatar2
        },
        {
            quote: "I've tried many blogging platforms, but this one offers the perfect balance of simplicity and powerful features.",
            author: "Emma Rodriguez",
            role: "Food Blogger",
            avatar: avatar3
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-container">
                <h2>What Our Users Say</h2>
                <p className="section-subtitle">Success stories from our community of bloggers</p>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;