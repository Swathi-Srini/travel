import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Destination.css';

import bloreImg from './blore.png';
import chennaiImg from './chennai.png';
import udupiImg from './udupi.png';
import kolkataImg from './kolkata.png';
import mumbaiImg from './mumbai.png';
import delhiImg from './delhi.png';
import kochiImg from './kochi.png';
import goaImg from './goa.png';
import ahmedabadImg from './ahmedbad.png';

const destinations = [
    { name: 'Bangalore', path: 'bangalore', image: bloreImg },
    { name: 'Chennai', path: 'chennai', image: chennaiImg },
    { name: 'Udupi', path: 'udupi', image: udupiImg },
    { name: 'Kolkata', path: 'kolkata', image: kolkataImg },
    { name: 'Mumbai', path: 'mumbai', image: mumbaiImg },
    { name: 'Delhi', path: 'delhi', image: delhiImg },
    { name: 'Kochi', path: 'kochi', image: kochiImg },
    { name: 'Goa', path: 'goa', image: goaImg },
    { name: 'Ahmedabad', path: 'ahmedabad', image: ahmedabadImg },
];

function Destination() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = () => {
        const foundDestination = destinations.find(dest => 
            dest.name.toLowerCase() === searchTerm.toLowerCase()
        );
        if (foundDestination) {
            navigate(`/destination/${foundDestination.path}`);
        } else {
            alert('Destination not found');
        }
    };

    return (
        <main>
            <div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for destinations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
                <div className="boxes">
                    {destinations.map((destination) => (
                        <Link to={`/destination/${destination.path}`} key={destination.path}>
                            <div className="box">
                                <img src={destination.image} alt={destination.name} className="destination-image" />
                                <h3>{destination.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Destination;
