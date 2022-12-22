import axios from './axios.js';
import { getAllDogs,
        getAllTemperament
        } from './dogSlice';

export async function apiAlldogs(dispatch){
    const peticion = await axios.get(`/dogs`);
    dispatch(getAllDogs(peticion?.data));
 return 
}

export async function apiAllTemperaments(dispatch){
    const peticion = await axios.get(`/temperaments`);
    dispatch(getAllTemperament(peticion?.data));
 return 
}
export async function apiAllbyname(dispatch, name){
    if(!!name){
    var peticion = await axios.get(`/dogs?name=${name}`);
   }else{
    var peticion = await axios.get(`/dogs?name`);
   }
   console.log(peticion)
   dispatch(getAllDogs(peticion?.data));
 return 
}