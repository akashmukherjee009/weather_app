import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import MainCard from './components/Body/MainCard';
import axios from 'axios';


const App = () => {
  const [city, setCity]= useState('kolkata')
  const [weather, setWeather]= useState(null)
  const apiKey = 'a9763bb3afc1e8abe931641881252830'
  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      }
    };

    // const fetchCityTemps = async () => {
    //   try {
    //     const responses = await Promise.all(cities.map(city => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)));
    //     const cityTemps = responses.map(response => ({
    //       name: response.data.name,
    //       temp: response.data.main.temp
    //     }));
    //     setCityTemps(cityTemps);
    //   } catch (error) {
    //     console.error('Error fetching city temperatures:', error);
    //   }
    // };

    fetchCurrentWeather();
    // fetchCityTemps();
  }, [city, apiKey]);
  const searchHandler=(a)=>{
    // console.log(a);
    setCity(a)
  }
  return (
    <div>
      {/* <h1 className='text-xl font-bold text-red-500'>Hello Tailwind</h1>
      <Button variant="contained">Hello world</Button> */}
      <Navbar searchHandler={searchHandler}/>
      {weather ? (
        <MainCard 
          cityName={city} 
          temp={weather.main.temp} 
          feelsLike={weather.main.feels_like}
          tempMax= {weather.main.temp_max}
          tempMin={weather.main.temp_min}
          humidity={weather.main.humidity} 
          wind={weather.wind.speed} 
          condition={weather.weather[0].description}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default App
