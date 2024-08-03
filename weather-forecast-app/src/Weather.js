import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [savedLocations, setSavedLocations] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setWeatherData(null);

    try {
      // Fetch coordinates of the location using Geocoding API
      const geoResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=234185d565f4ea8e98f4febe8d03e7b8`
      );
      console.log('Geo Response:', geoResponse); // Log response
      if (!geoResponse.ok) {
        if (geoResponse.status === 401) {
          throw new Error('Invalid API key');
        } else if (geoResponse.status === 404) {
          throw new Error('Location not found');
        } else {
          throw new Error('An error occurred while fetching location data');
        }
      }
      const geoData = await geoResponse.json();
      if (geoData.length === 0) {
        throw new Error('Location not found');
      }
      console.log('Geo Data:', geoData); // Log data

      const { lat, lon, name, state, country } = geoData[0];

      // Fetch current weather and 7-day forecast using the One Call API 3.0
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=234185d565f4ea8e98f4febe8d03e7b8`
      );
      console.log('Weather Response:', weatherResponse); // Log response
      if (!weatherResponse.ok) {
        throw new Error('An error occurred while fetching weather data');
      }
      const weatherData = await weatherResponse.json();
      weatherData.location = `${name}, ${state}, ${country}`;
      console.log('Weather Data:', weatherData); // Log data
      setWeatherData(weatherData);
    } catch (err) {
      console.error('Error:', err.message); // Log error message
      setError(err.message);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSaveLocation = () => {
    if (weatherData) {
      setSavedLocations([...savedLocations, weatherData]);
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <header>
        <h1>Weather App</h1>
        <p>Enter a city name followed by a comma and the full state name (e.g., Columbia, South Carolina) to get the current weather and a 7-day forecast.</p>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name, full state name (e.g., Columbia, South Carolina)"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error-notification">{error}</p>}
      {weatherData && (
        <div className="current-weather-container">
          <div className="current-weather">
            <h2>Current Weather - {weatherData.location}</h2>
            <p>Temperature: {weatherData.current.temp}°C</p>
            <p>Weather: {weatherData.current.weather[0].description}</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
          </div>
          <div className="forecast">
            <h2>7-Day Forecast</h2>
            {weatherData.daily.slice(0, 7).map((day, index) => (
              <div key={index} className="forecast-card">
                <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                <p>High: {day.temp.max}°C</p>
                <p>Low: {day.temp.min}°C</p>
                <p>Weather: {day.weather[0].description}</p>
              </div>
            ))}
          </div>
          <button onClick={handleSaveLocation}>Save Location</button>
        </div>
      )}
      {savedLocations.length > 0 && (
        <div className="saved-locations">
          <h2>Saved Locations</h2>
          {savedLocations.map((locationData, index) => (
            <div key={index} className="saved-location-card">
              <h3>{locationData.location}</h3>
              <div className="current-weather">
                <p>Temperature: {locationData.current.temp}°C</p>
                <p>Weather: {locationData.current.weather[0].description}</p>
                <p>Humidity: {locationData.current.humidity}%</p>
              </div>
              <div className="forecast">
                <h4>7-Day Forecast</h4>
                {locationData.daily.slice(0, 7).map((day, dayIndex) => (
                  <div key={dayIndex} className="forecast-card">
                    <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                    <p>High: {day.temp.max}°C</p>
                    <p>Low: {day.temp.min}°C</p>
                    <p>Weather: {day.weather[0].description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;