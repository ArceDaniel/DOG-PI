import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allDogs: [],
    dogsFilter: [], 
    temperament: [],
    loading: true,
    error: false,
};


const dogSlice = createSlice({
    name: "dog",
    initialState,
    reducers:{
        getAllDogs(state, action){
            state.allDogs = action.payload;
            state.dogsFilter = action.payload;
        },
        getAllTemperament(state, action){
            state.temperament = action.payload;
        },
        filterByTemperament(state, {payload}){
            const allDogs = state.dogsFilter; 
            const filter = payload === 'all' ? state.allDogs : allDogs.filter(el => {
              return el?.temperaments?.includes(payload);
            });
            state.dogsFilter = filter;
        },
        filterByCreated(state, {payload}){
            const allDogs = state.dogsFilter; 
            const filter = payload === 'all' ? state.allDogs : allDogs.filter(el => {
                return el?.isDB == Boolean(payload)
            });
            state.dogsFilter = filter;
        }

    }
})
export const {
    getAllDogs,
    getAllTemperament,
    filterByCreated,
    filterByTemperament,
} = dogSlice.actions;
export default dogSlice.reducer;