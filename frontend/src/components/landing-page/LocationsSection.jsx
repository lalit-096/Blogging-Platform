import React from 'react';
import '../../assets/css/LandingPage/locationSection.css'
import worldMap from '../../assets/react.svg';

function LocationsSection() {
    const locations = [
        {
            city: "New York",
            address: "123 Broadway, New York, NY 10001",
            phone: "+1 (212) 555-1234"
        },
        {
            city: "London",
            address: "456 Oxford Street, London, W1C 1AP",
            phone: "+44 20 7123 4567"
        },
        {
            city: "Singapore",
            address: "789 Orchard Road, Singapore 238839",
            phone: "+65 6123 4567"
        },
        {
            city: "Sydney",
            address: "101 George Street, Sydney NSW 2000",
            phone: "+61 2 9123 4567"
        }
    ];

    return (
        <section className="locations-section" id="locations">
            <div className="locations-container">
                <h2>Our Global Presence</h2>
                <p className="section-subtitle">Serving content creators worldwide</p>

                <div className="locations-display">
                    <div className="map-container">
                        <img src={worldMap} alt="Global Locations" className="world-map" />
                    </div>

                    <div className="locations-list">
                        {locations.map((location, index) => (
                            <div key={index} className="location-card">
                                <h3>{location.city}</h3>
                                <p>{location.address}</p>
                                <p>{location.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationsSection;