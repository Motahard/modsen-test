import { stormGlassKey, openWeatherKey } from "./config";

// const sourceStorm = 'sg';

export const getLatLon = (cityName) => `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${openWeatherKey}`
export const getOpenIconURL = (name) =>  `https://openweathermap.org/img/wn/${name}@2x.png`

export const generateOpenWeatherLink = (lat, lon) =>{
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}&lang=ru`;
}

export const generateStormObject = (lat, lon) => {
    return {
        linkStorm: `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=airTemperature`,
        headers: {
            'Authorization': stormGlassKey
        }
    }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getDayName = (time) => {
    const d = new Date(time);
    return days[d.getDay()];
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export const dayTodos = [
    [
        {
            time: '8:00',
            todo: 'Hit the gym'
        },
        {
            time: '12:00',
            todo: 'Pay bills'
        },
        {
            time: '17:00',
            todo: 'Meet George'
        }
    ],
    [
        {
            time: '9:00',
            todo: 'Buy eggs'
        },
        {
            time: '14:00',
            todo: 'Read a book'
        },
        {
            time: '17:00',
            todo: 'Organize office'
        }
    ],
    [
        {
            time: '9:00',
            todo: 'Work'
        },
        {
            time: '17:00',
            todo: 'Buy products'
        },
        {
            time: '20:00',
            todo: 'Codding'
        }
    ],
    [
        {
            time: '8:00',
            todo: 'Walk in the park'
        },
        {
            time: '12:00',
            todo: 'Watching film'
        },
        {
            time: '20:00',
            todo: 'Codding'
        }
    ],
    [
        {
            time: '8:00',
            todo: 'Go to the gym'
        },
        {
            time: '12:00',
            todo: 'Buy protein'
        },
        {
            time: '17:00',
            todo: 'Play game with friends'
        }
    ],
    [
        {
            time: '10:00',
            todo: 'Read a book'
        },
        {
            time: '15:00',
            todo: 'Watching film'
        },
        {
            time: '20:00',
            todo: 'Play games'
        }
    ],
    [
        {
            time: '8:00',
            todo: 'Buy products'
        },
        {
            time: '12:00',
            todo: 'Meet Bill'
        },
        {
            time: '20:00',
            todo: 'Walk in the park'
        }
    ],
   
]