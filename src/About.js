import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="overlay"></div>
            <header className="about-header">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/destination">Destinations</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://www.bing.com/maps">Maps</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h2>About Us</h2>
                <p>
                    Welcome to our travel website! We are dedicated to helping you discover the beauty of the world.
                    Our mission is to provide you with the best travel experiences, tailored to your preferences.
                    Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.
                </p>
                <p>
                    Our team consists of travel enthusiasts who believe in the power of exploration and the joy of discovery.
                    We are committed to delivering quality content and personalized recommendations to make your travels unforgettable.
                </p>
                <p>
                    Join us on this journey and let us guide you to your next adventure.
                    Explore our destinations, read our tips, and reach out to us with any questions or suggestions.
                    We are here to help you make the most of your travels!
                </p>
            </main>

            <footer>
                <p>&copy; 2024 Your Travel Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
