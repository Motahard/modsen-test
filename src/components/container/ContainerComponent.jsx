import React from 'react'
import { useSelector } from 'react-redux';
import { WeatherItemComponent } from '../weatherItem/WeatherItemComponent';
import { TimerComponent } from '../timer/TimerComponent'

import './container.css'
import { FirstWeatherItem } from '../firstWeatherItem/FirstWeatherItem';

export const ContainerComponent = () => {
    const {data, cityName} = useSelector(state => state.show.dataToShow);

    if (data) {
        return (
            <div className='content'>
                 <div className="main-content">
                    <div className='timer'>
                         <TimerComponent />
                    </div>
                    <div className='city'>
                         {cityName}
                    </div>
                </div>
                <div className="items">
                    <div className="container-items">
                        <FirstWeatherItem/>
                    { data.map((i, j) => (
                            <WeatherItemComponent key={i.time} item={i} index={j}/>
                        )) }
                    </div>
                        
                </div>
            </div>
        ) 
    }
    else {
        return <div className='loading'>LOADING...</div>
    }
}
