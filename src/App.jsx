import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { ContainerComponent } from './components/container/ContainerComponent';
import { SearchComponent } from './components/search/SearchComponent';
import { fetchOpenWeather, getOpenCachedData } from './redux/slices/openWeatherSlice';
import { setToShowData } from './redux/slices/weatherToShow';
import { generateOpenWeatherLink, generateStormObject } from './utils';

import sunFon from './assets/sun-fon.jpg'
import sunMain from './assets/sun-main.jpg'
import cloudyFon from './assets/cloudy-fon.jpg'
import cloudyMain from './assets/cloudy-main.jpg'
import hcloudyFon from './assets/hard-cloudy-fon.jpg'
import hcloudyMain from './assets/hard-cloudy-main.jpg'
// import axios from 'axios';

const App = () => {
  const firstChild = useSelector(state => state.show.dataToShow.clouds);
  const [imgMain, setImgMain] = useState('');
  const [imgFon, setImgFon] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      
      const openWeatherCache = localStorage.getItem('open');

      // const { linkStorm, headers } = generateStormObject(latitude, longitude);
      // axios.get(linkStorm, headers).then(res => console.log(res))

      if (!openWeatherCache) {
        const linkOpen = generateOpenWeatherLink(latitude, longitude);
        dispatch(fetchOpenWeather({linkOpen}))
        .unwrap()
        .then(res => {
          localStorage.setItem('open', JSON.stringify([res]));
          dispatch(setToShowData(res))
        });
        
      } else {
        const data = JSON.parse(openWeatherCache);
        dispatch(getOpenCachedData(data))
        dispatch(setToShowData(data[0]))
      }
    });
  }, []);

  useEffect(() => {
    if (firstChild) {
      if (firstChild < 20) {
        setImgFon(sunFon);
        setImgMain(sunMain);
      } 
      else if ( firstChild < 50) {
        setImgFon(cloudyFon);
        setImgMain(cloudyMain);
      } 
      else {
        setImgFon(hcloudyFon);
        setImgMain(hcloudyMain);
      }
    }
  }, [firstChild])

  return (
    <div className='App'>
      {imgFon && <img src={imgFon} alt="fon" className='app-background' />}
      <div className="container">
        {imgMain && <img src={imgMain} alt="main" className='container-background' />}
        <SearchComponent />
        <ContainerComponent />
      </div>
    </div>
  )
}

export default App;
