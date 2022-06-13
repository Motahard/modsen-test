import React from 'react'
import { getDayName, getOpenIconURL } from '../../utils';

import './weather-item.css'

export const WeatherItemComponent = ({ item, index }) => {
    const { temp, weatherIcon, time } = item;
    const dayName = getDayName(time);

    return (
        <div className={`weatherItem ${index === 0 && 'hide'}`}>
            <p> <span className="spanBordered">{dayName.slice(0, 3).toUpperCase()}</span></p>
            <img className='iconWeather' src={getOpenIconURL(weatherIcon)} alt="icon" />
            <p>{temp}°</p>
        </div>
  )
}
