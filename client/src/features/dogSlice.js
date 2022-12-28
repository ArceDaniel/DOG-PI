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
            const allDogs = state.allDogs; 
            const filter = payload === 'all' ? state.allDogs : allDogs.filter(el => {
              return el?.temperaments?.includes(payload);
            });
            state.dogsFilter = filter;
        },
        filterByCreated(state, {payload}){
            const allDogs = state.dogsFilter; 
            const filter = payload === 'all' ? allDogs : allDogs.filter(el => {
                return el?.isDB === Boolean(payload)
            });
            state.dogsFilter = filter;
        },
        sortByAsc(state, {payload}){
            const sortedName = payload === 'asc' ?
            state.dogsFilter.sort((a, b) => { 
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1;
                }
                return 0
            }) :
            state.dogsFilter.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            })

            state.dogsFilter = sortedName;
        },
        sortByWeight({dogsFilter}, {payload}){
            const sortedWeight = payload === 'max' ?
            dogsFilter.sort(function (a, b) {
                if(typeof a.weight === 'string') a.weight = a.weight.split('-');
                if(typeof b.weight === 'string') b.weight = b.weight.split('-');
                return b.weight[1] - a.weight[1];
            }) :
            dogsFilter.sort(function (a, b) {
                if(typeof a.weight === 'string') a.weight = a.weight.split('-');
                if(typeof b.weight === 'string') b.weight = b.weight.split('-');
                return a.weight[0] - b.weight[0];
            });

            dogsFilter = sortedWeight;
        }

    }
})
export const {
    getAllDogs,
    getAllTemperament,
    filterByCreated,
    filterByTemperament,
    sortByAsc,
    sortByWeight,
} = dogSlice.actions;
export default dogSlice.reducer;