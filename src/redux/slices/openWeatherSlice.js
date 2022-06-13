import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
};

export const fetchOpenWeather = createAsyncThunk(
    'openWeather/fetchByLanLon',
    async (obj, ThunkAPI) => {
        const { linkOpen } = obj;
        
        const response = await axios.get(linkOpen);
        const listArr = response.data.list;
        const cityName = response.data.city.name;
        const clouds = response.data.list[0].clouds.all;
        
        const data = []
        listArr.forEach(i => {
            data.push({
                temp: Math.floor(i.main.temp),
                weatherIcon: i.weather[0].icon,
                time: i.dt_txt,
                weatherDescription: i.weather[0].description,
            })
        })
        const filteredArr = data.filter((item, index) => {
            if(new Date(item.time).getHours() === 15) return item; 
            else if (index === 0 && new Date(item.time).getHours() !== 15) return item;
        })
        const time = Date.now();
        return {
            clouds,
            time,
            cityName,
            data: filteredArr
        };
    }
);

const openWeatherSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        getOpenCachedData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOpenWeather.fulfilled, (state, action) => {
            state.data.push(action.payload);
        })
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export const { getOpenCachedData } = openWeatherSlice.actions;

export default openWeatherSlice.reducer;