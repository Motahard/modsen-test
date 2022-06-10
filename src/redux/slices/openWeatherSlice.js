import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { generateOpenWeatherLink } from "../../config";

const initialState = {
    data: []
};

export const fetchOpenWeather = createAsyncThunk(
    'weather/fetchByLanLon',
    async (lan, lon) => {
        const link = generateOpenWeatherLink(lan, lon);
        const response = await axios.get(link);
        
        localStorage.setItem('open', JSON.stringify(response.data));
        console.log(response.data);

        return response.data;
    }
);

const stormGlassSlice = createSlice({
    name: 'stormGlass',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOpenWeather.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
    }
})


export default stormGlassSlice;