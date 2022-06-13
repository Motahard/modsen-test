import React from 'react'
import { dayTodos } from '../../utils';

import './todos.css'

export const TodosComponent = () => {
    const day = new Date().getDay();
    const arr = dayTodos[day];
    return (
        <div className='todos'>
            {arr.map(i => (
                <div className='todos-item' key={i.todo}>
                    <div className='timeTodo'>
                       <p className='spanBordered'>{i.time}</p>
                    </div>
                       <div>
                       <p>{i.todo}</p>
                       </div>
                       
                </div>
            ))}
        </div>
    )
}
