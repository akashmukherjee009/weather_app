import React, { useEffect, useState } from 'react';
import './MainCard.css';
import tstrom from '../../assets/tstrom.jpg';
import haze from '../../assets/haze.jpg';
import shiny from '../../assets/shiny.jpg';
import cloudy from '../../assets/cloudy.jpg';

const MainCard = ({ cityName, temp, feelsLike, tempMax, tempMin, humidity, wind, condition }) => {
  
  const [backgroundImage, setBackgroundImage] = useState(shiny);

  useEffect(() => {
    switch (condition) {
      case 'haze':
        setBackgroundImage(haze);
        break;
      case 'cloudy':
        setBackgroundImage(cloudy);
        break;
      case 'tstrom':
        setBackgroundImage(tstrom);
        break;
      default:
        setBackgroundImage(shiny);
        break;
    }
  }, [condition]);

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: 'white',
    overflow: 'hidden',
    padding: '20px',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '600px',
  };

  return (
    <div className="container">
      <div className="weather-card" style={cardStyle}>
        <h1>{cityName}</h1>
        <div className="weather-details">
          <div className="temperature">
            <span className="temp-value">{temp}°C</span>
          </div>
          <div className="details">
            <p>Feels Like: {feelsLike}°C</p>
            <p>Max Temp: {tempMax}°C</p>
            <p>Min Temp: {tempMin}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {wind} km/h</p>
            <p>Condition: {condition}</p>
          </div>
        </div>
      </div>
      {/* <PropCity /> */}
    </div>
  );
};

export default MainCard;
