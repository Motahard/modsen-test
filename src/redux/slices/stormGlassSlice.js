import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
};

export const fetchWeatherStorm = createAsyncThunk(
    'stormWeather/fetchByLanLon',
    async (obj) => {
        const { link, headers } = obj;
        const response = await axios.get(link, {
            headers
        });
        
        localStorage.setItem('storm', JSON.stringify(response.data));
        return response.data;
    }
);

const stormGlassSlice = createSlice({
    name: 'stormGlass',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherStorm.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
    }
})

export default stormGlassSlice.reducer;