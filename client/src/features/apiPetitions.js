import axios from 'axios';
import { getAllDogs } from './dogSlice';

export async function apiAlldogs(dispatch){
    const peticion = await axios.get(`http://localhost:5000/dogs`);
    dispatch(getAllDogs(peticion?.data));
 return 
}