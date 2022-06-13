import React from 'react'
import { useSelector } from 'react-redux';
import { getOpenIconURL } from '../../utils';
import './first-item.css'

export const FirstWeatherItem = () => {
    const firstChild = useSelector(state => state.show.dataToShow.data[0])
    const { temp, weatherIcon } = firstChild;

    return (
        <div className='weatherItemFirst'>
            <div>
                <img className='iconWeatherFirst' src={getOpenIconURL(weatherIcon)} alt="icon" />
            </div>
            <div className='weatherInfo'>
                <p> <span className="spanBordered">NOW</span></p>
                <p className='tempFirst'>{temp}°</p>
            </div>
        </div>
  )
}
