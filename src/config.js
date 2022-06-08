export const stormGlassKey = 'b3c36daa-e70e-11ec-8af0-0242ac130002-b3c36e22-e70e-11ec-8af0-0242ac130002';
export const openWeatherKey = '5676b04be3ead73f490dc4497ce17fbe';

export const generateOpenWeatherLink = (lat, lon) => {
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`;
    return link;
}

export const generateStormObject = (lat, lon) => {
    return {
        params: 'windSpeed',
        link: `https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lon}&params=${params}`,
        headers: {
            'Authorization': stormGlassKey
        }
    }
}