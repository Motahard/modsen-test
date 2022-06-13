import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataToShow: {}
};

const weatherToShow = createSlice({
    name: 'show',
    initialState,
    reducers: {
        setToShowData(state, action) {
            state.dataToShow = action.payload;
        }
    },
})

export const { setToShowData } = weatherToShow.actions;

export default weatherToShow.reducer;