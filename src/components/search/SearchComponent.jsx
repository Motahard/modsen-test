import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToShowData } from '../../redux/slices/weatherToShow';
import { fetchOpenWeather } from '../../redux/slices/openWeatherSlice';
import { generateOpenWeatherLink, getLatLon } from '../../utils';

import './search.css'

export const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const [invalidName, setInvalidName] = useState(false);
    const dispatch = useDispatch();
    const stateShow = useSelector(state => state.show.dataToShow)
    const stateOpen = useSelector(state => state.open.data)

    useEffect(() => {
        if(stateShow.cityName) {
            setSearch(stateShow.cityName);
        }
    }, [stateShow])

    const handleKeyPress = e => {
        if(e.key === 'Enter'){
          const cityName = e.target.value;
          const link = getLatLon(cityName);
          const findingInCache = stateOpen.find(i => i.cityName.toLowerCase() === e.target.value.toLowerCase())
          if(findingInCache) {
            dispatch(setToShowData(findingInCache))
          } else {
              axios.get(link)
              .then(res => {
                const {lat, lon} = res.data[0];
                const linkOpen = generateOpenWeatherLink(lat, lon);
                dispatch(fetchOpenWeather({linkOpen}))
                  .unwrap()
                  .then(res => {
                    let openCache = JSON.parse(localStorage.getItem('open'));
                    if (!openCache) {
                      openCache = [];
                    }
                    openCache.push(res);
                    localStorage.setItem('open', JSON.stringify(openCache))
                    dispatch(setToShowData(res))
                  })
              })
              .catch(err => {
                setInvalidName(true);
                setSearch('City not found');
                setTimeout(() => {
                  setSearch('');
                  setInvalidName(false);
                }, 1500);
                console.log('error in getting lan lon of city', err);
              });
          }
        }
      }

      const handleChange = e => {
        setSearch(e.target.value);
      }

  return (
    <div className='searchContainer'>
        <input type="text"
            onKeyPress={handleKeyPress} 
            value={search} 
            onChange={handleChange}
            disabled={invalidName}
            placeholder='Введите название города'
            className={`search ${invalidName ? 'error' : ''}`}
        />
    </div>
  )
}
