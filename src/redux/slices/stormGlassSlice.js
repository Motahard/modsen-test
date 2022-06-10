import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { generateStormObject } from "../../config";

const initialState = {
    data: []
};

export const fetchWeatherStorm = createAsyncThunk(
    'weather/fetchByLanLon',
    async (lan, lon) => {
        const { link, headers } = generateStormObject(lan, lon);
        const response = await axios.get(link, {
            headers
        });
        
        localStorage.setItem('storm', JSON.stringify(response.data));
        console.log(response.data);

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

export default stormGlassSlice;