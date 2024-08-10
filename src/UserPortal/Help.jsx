import  { useEffect, useRef } from 'react';

const Help = () => {

  const buttonRef = useRef(null); // Use useRef to access the button element
  const coordinatesDisplayRef = useRef(null);
  const locationDisplayRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const coordinatesDisplay = coordinatesDisplayRef.current;
    const locationDisplay = locationDisplayRef.current;

    if (button) {
      button.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
          );
        } else {
          coordinatesDisplay.innerHTML = "Geolocation is not supported by this browser.";
        }
      });
    }
  }, []); // Empty dependency array ensures the effect runs only once

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordinatesDisplayRef.current.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
    getPlaceName(latitude, longitude);

    // Send location data to backend
    sendLocationToBackend(latitude, longitude);
  }

  function sendLocationToBackend(latitude, longitude) {
    const url = 'http://localhost:3000/api/send-location'; // Replace with your backend API endpoint

    const data = {
      latitude: latitude,
      longitude: longitude
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Location sent to backend successfully:', data);
        locationDisplayRef.current.innerHTML = 'Location sent to backend successfully';
      })
      .catch(error => {
        console.error('Error sending location data:', error);
        locationDisplayRef.current.innerHTML = 'Error sending location data';
      });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        coordinatesDisplayRef.current.innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        coordinatesDisplayRef.current.innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        coordinatesDisplayRef.current.innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        coordinatesDisplayRef.current.innerHTML = "An unknown error occurred.";
        break;
    }
  }

  function getPlaceName(lat, lng) {
    const apiKey = 'your_opencage_api_key_here'; // Replace with your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const placeName = data.results[0].formatted;
          locationDisplayRef.current.innerHTML = `Location: ${placeName}`;
        } else {
          locationDisplayRef.current.innerHTML = 'Unable to retrieve location.';
        }
      })
      .catch(error => {
        console.error('Error fetching place name:', error);
        locationDisplayRef.current.innerHTML = 'Error fetching place name.';
      });
  }

  return (
    <div className="mainx"><div className="container3">
    <h1>User Panel</h1>
    <button className="hal"ref={buttonRef} id="locationbtn">Send My Location to Admin</button>
    <p ref={coordinatesDisplayRef} id="coordinates"></p>
    <p ref={locationDisplayRef} id="location"></p>
  </div></div>
  );
};

export default Help;
