import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allDogs: null,
    dogsFilter: [], 
    temperamen: [],
    loading: true,
    error: false,
};


const dogSlice = createSlice({
    name: "dog",
    initialState,
    reducers:{
        getAllDogs(state, action){
            state.allDogs = action.payload;
        }

    }
})
export const {
    getAllDogs,
} = dogSlice.actions;
export default dogSlice.reducer;