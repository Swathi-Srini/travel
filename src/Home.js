import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Header */}
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destination">Destinations</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://www.bing.com/maps?FORM=Z9LH2&cp=0.35156%7E91.054688&lvl=2.0" target="_blank" rel="noopener noreferrer">Maps</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Your Next Adventure</h1>
                    <h2>Discover amazing places around the world with us.</h2>
                    <Link to="/destination" className="btn">Explore Destinations</Link>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Your Travel Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
