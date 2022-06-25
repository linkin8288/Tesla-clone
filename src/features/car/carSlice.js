import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cars: ["Model Y, Models S, Model 3, Model X"]
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducer: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer