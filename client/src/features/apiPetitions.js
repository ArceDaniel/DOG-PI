import axios from "./axios.js";
import { getAllDogs, getAllTemperament } from "./dogSlice";


export async function apiAlldogs(dispatch) {
  try {
    const peticion = await axios.get(`/dogs`);
    dispatch(getAllDogs(peticion?.data));
    return;
  } catch (error) {
    return error.response;
  }
}

export async function apiAllTemperaments(dispatch) {
  const peticion = await axios.get(`/temperaments`);
  dispatch(getAllTemperament(peticion?.data));
  return;
}
export async function apiAllbyname(dispatch, name) {
  const peticion = await axios.get(`/dogs?name=${name}`);
  dispatch(getAllDogs(peticion?.data));
  return;
}

export async function apiPostBreed(newBreed) {
  return await axios.post("/dogs", {
    ...newBreed,
    weight: `${newBreed.MinWeight} - ${newBreed.MaxWeight}`,
    height: `${newBreed.MinHeight} - ${newBreed.MaxHeight}`,
    lifeSpan: `${newBreed.MinLifeSpan} - ${newBreed.MaxLifeSpan} year`,
    temperament: newBreed.temperaments,
  });
}
