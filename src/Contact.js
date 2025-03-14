import React from 'react';
import './Contact.css';

function Contact() {

    const contactInfo = {
        name: 'Alice', 
        email: 'alicetravel125@gmail.com', 
        phone: '84335 75234', 
    };

    const contactInfo1 = {
        name: 'Sunny', 
        email: 'sw234@gmail.com',
        phone: '84335 32278', 
    };



    return (
        <div className="contact-page">
            <div className="overlay"></div>
            <header>
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
                <h2>FOR MORE QUERIES, CONTACT</h2>
                <div className="contact-details">
                    <p><strong>Name:</strong> {contactInfo.name}</p>
                    <p><strong>Email:</strong> {contactInfo.email}</p>
                    <p><strong>Phone:</strong> {contactInfo.phone}</p>
                </div>

                <br/>

                <div className="contact-details">
                <p><strong>Name:</strong> {contactInfo1.name}</p>
                    <p><strong>Email:</strong> {contactInfo1.email}</p>
                    <p><strong>Phone:</strong> {contactInfo1.phone}</p>

                </div>
            </main>

            <footer>
                <p>&copy; 2024 Your Travel Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;