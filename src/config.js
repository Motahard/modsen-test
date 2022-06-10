import moment from "moment";

export const stormGlassKey = 'b3c36daa-e70e-11ec-8af0-0242ac130002-b3c36e22-e70e-11ec-8af0-0242ac130002';
export const openWeatherKey = '5676b04be3ead73f490dc4497ce17fbe';

const sourceStorm = 'sg';
const start = (Number(new Date()) / 1000).toFixed(0);
const today = new Date();
const end = (Number(new Date(today.getFullYear(), today.getMonth(), today.getDate()+2)) / 1000).toFixed(0);

console.log(start, end)

export const getLatLon = (cityName) => `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${openWeatherKey}`
export const getIconURL = (name) =>  `http://openweathermap.org/img/wn/${name}@2x.png`

const firstDay = moment().startOf('day').format('x');

export const generateOpenWeatherLink = (lat, lon) => 
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&&appid=${openWeatherKey}&cnt=7`;

export const generateStormObject = (lat, lon) => ({
    link: `https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lon}&params=airTemperature,cloudCover,time&start=${start}&end=${end}&source=${sourceStorm}`,
    headers: {
        'Authorization': stormGlassKey
    }
})
        