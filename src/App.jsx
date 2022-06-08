import axios from 'axios';
import React, { useEffect } from 'react'
import './App.css';
import { generateOpenWeatherLink, generateStormObject } from './config';

const App = () => {
  useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude)
      axios.get(generateOpenWeatherLink(latitude, longitude)).then(res => console.log(res.data))
      const { link, headers } = generateStormObject(latitude, longitude);
      axios.get(link, {
        headers
      }).then(res => console.log(res.data))
    });
  }, []);
  
  return (
    <div>
      App
    </div>
  )
}

export default App;
