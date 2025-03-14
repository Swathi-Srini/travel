import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import Destination from './Destination.js';
import DestinationDetail from './DestinationDetail.js';
import About from './About.js';

function App() {
    return (
        <React.StrictMode>
            <Router>
                <div className="App">
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/destination">Destinations</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><a href="https://www.bing.com/maps">Maps</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </header>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/destination" element={<Destination />} />
                        <Route path="/destination/:city" element={<DestinationDetail />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </React.StrictMode>
    );
}

export default App;
