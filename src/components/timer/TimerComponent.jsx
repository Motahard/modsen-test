import React, { useState, useEffect } from 'react'
import { getDayName, monthNames } from '../../utils';
import { TodosComponent } from '../todos/TodosComponent';
import './timer.css'

export const TimerComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timeInterval);
        }
    })

    return (
        <div className='timer-tasks'>
            <div className="time">
                <h3 className='hours'>
                    {time.getHours()+':' + (time.getMinutes() < 10 ? `0${time.getMinutes()}`: time.getMinutes()) }
                    <span> {time.getHours() < 12 ? 'AM':'PM'}</span>
                </h3>
                <p className='date'>
                    { getDayName(time) + ', ' + time.getDate() + ' ' +  monthNames[time.getMonth()] + ' ' + time.getFullYear()}
                </p>
            </div>
            <div className='tasks'>
                <TodosComponent />
            </div>
        </div>
    )
}
