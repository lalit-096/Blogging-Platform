import React, { useState } from 'react';
import '../../assets/css/LandingPage/subscribeSection.css';

function SubscribeSection() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the subscription logic with an API call
        console.log('Subscribing email:', email);
        setIsSubmitted(true);
        setEmail('');
        // Reset the success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="subscribe-section">
            <div className="subscribe-container">
                <h2>Stay Updated</h2>
                <p className="section-subtitle">Subscribe to our newsletter for the latest blogging tips and updates</p>

                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>

                {isSubmitted && (
                    <p className="success-message">Thanks for subscribing! We'll be in touch soon.</p>
                )}

                <p className="privacy-note">We respect your privacy and will never share your information.</p>
            </div>
        </section>
    );
}

export default SubscribeSection;