import moment from "moment";

export const stormGlassKey = 'b3c36daa-e70e-11ec-8af0-0242ac130002-b3c36e22-e70e-11ec-8af0-0242ac130002';
export const openWeatherKey = '5676b04be3ead73f490dc4497ce17fbe';

const firstDay = moment().startOf('day').format('x');
const today = new Date();
const lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()+6);

console.log(firstDay, +lastDay)

export const generateOpenWeatherLink = (lat, lon) => {
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&&appid=${openWeatherKey}`;
    return link;
}

export const generateStormObject = (lat, lon) => {
    return {
        link: `https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lon}&params=airTemperature`,
        headers: {
            'Authorization': stormGlassKey
        }
    }
}