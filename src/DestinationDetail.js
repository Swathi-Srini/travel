import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { city } = useParams(); 
  const [cityData, setCityData] = useState(null); 
  const [error, setError] = useState(null); 
  const [selectedGenres, setSelectedGenres] = useState([]); 

  useEffect(() => {
    fetch(`/destination/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found!');
        }
        return response.json();
      })
      .then((data) => {
        setCityData(data);
        setError(null);
      })
      .catch((err) => {
        setCityData(null);
        setError(err.message);
      });
  }, [city]);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const filteredSpots =
    cityData?.spots.filter((spot) =>
      selectedGenres.length === 0
        ? true
        : spot.genres.some((genre) => selectedGenres.includes(genre))
    ) || [];

  return (
    <div className="destination-detail">
      <div className="destination-header">
        <h1>{city}</h1>
        <p>{cityData?.description || 'Loading...'}</p>
      </div>

      {error && <p className="error-message">{error}</p>}

      {cityData && (
        <>
          <div className="genres-section">
            <h2>Filter by Genre</h2>
            <div className="genre-checkboxes">
              {['adventure', 'nature', 'historical site'].map((genre) => (
                <div key={genre} className="genre-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value={genre}
                      checked={selectedGenres.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                    />
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="spots-section">
            <h2>Spots</h2>
            <ul className="spots-list">
              {filteredSpots.map((spot, index) => (
                <li key={index}>
                  <h3>{spot.name}</h3>
                  <p>Genres: {spot.genres.join(', ')}</p>
                </li>
              ))}
            </ul>
            {filteredSpots.length === 0 && (
              <p className="no-spots-message">No spots found for selected genres.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DestinationDetail;
