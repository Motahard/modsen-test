import axios from 'axios';
import React, { useEffect } from 'react'
import './App.css';
import { generateOpenWeatherLink, generateStormObject } from './config';

const App = () => {
  useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude)
      const openWeatherCache = localStorage.getItem('open');
      const stormWeatherCache = localStorage.getItem('storm');
 
      if (openWeatherCache === null || stormWeatherCache === null) {
        
      }
      else {
        console.log('cached')
        console.log(JSON.parse(openWeatherCache));
        console.log(JSON.parse(stormWeatherCache));
      }
    });
  }, []);
  
  return (
    <div>
      App
    </div>
  )
}

export default App;
