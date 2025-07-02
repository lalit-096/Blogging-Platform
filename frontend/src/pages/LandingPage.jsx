import React from 'react';
import Header from '../components/landing-page/Header';
import HeroSection from '../components/landing-page/HeroSection';
import SliderSection from '../components/landing-page/SliderSection';
import FeaturesSection from '../components/landing-page/FeaturesSection';
import ResourcesSection from '../components/landing-page/ResourcesSection';
import TestimonialsSection from '../components/landing-page/TestimonialsSection';
import LocationsSection from '../components/landing-page/LocationsSection';
import SubscribeSection from '../components/landing-page/SubscribeSection';
import Footer from '../components/landing-page/Footer';

function LandingPage() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <SliderSection />
            <FeaturesSection />
            <ResourcesSection />
            <TestimonialsSection />
            <LocationsSection />
            <SubscribeSection />
            <Footer />
        </div>
    );
}

export default LandingPage;