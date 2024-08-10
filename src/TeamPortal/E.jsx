import  { useState, useEffect } from 'react';
import './team.css'
function E() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/get-latest-location')
      .then(response => response.json())
      .then(data => {
        setLocation(data);
      })
      .catch(error => {
        setError('Error fetching location.');
        console.error('Error fetching latest location:', error);
      });
  }, []);

  return (
    <div className="mainx"> <div className="container3">
    <h1>E Panel - Latest User Location</h1>
    {location ? (
      <div>
        <p><strong>Latitude:</strong> {location.latitude}</p>
        <p><strong>Longitude:</strong> {location.longitude}</p>
        <p><strong>Timestamp:</strong> {new Date(location.timestamp).toLocaleString()}</p>
      </div>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <p>Loading...</p>
    )}
  </div>
</div>
  );
}

export default E;
