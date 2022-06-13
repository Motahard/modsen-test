import { configureStore } from '@reduxjs/toolkit'
import openWeatherSlice from './slices/openWeatherSlice'
import stormGlassSlice from './slices/stormGlassSlice'
import weatherToShow from './slices/weatherToShow';

const store = configureStore({
  reducer: {
    open: openWeatherSlice,
    storm: stormGlassSlice,
    show: weatherToShow
  }
})

export default store;