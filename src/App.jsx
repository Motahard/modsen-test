import React, { useEffect } from 'react'
import './App.css';

const App = () => {
  useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude)
    });
  }, []);
  
  return (
    <div>
      App
    </div>
  )
}

export default App;
