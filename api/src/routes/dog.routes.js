import { Router } from "express";
import { createBreed, getAllDogs, getDogApi } from "../helpers/APIconnection.js";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

const dogRoutes = Router();

dogRoutes.get('/', async (req, res)=>{
    const { name } = req.query;
    try{
       const dogs = await getAllDogs(name);
       if(!dogs || !dogs.length) return res.status(404).send('Breed not found');
        return res.status(200).json(dogs);
        
        }catch(err){
            return res.status(400).send(err.message)
    }
})

dogRoutes.get('/:idRaza', async (req,res)=>{
    const { idRaza } = req.params;

    try {
        const dogApi = await getDogApi(idRaza);
        if(dogApi) return res.status(200).json(dogApi);

        const dog = await BREED.findByPk(idRaza, {
            include:[{
                model:TEMPERAMENT,
                attributes: ["name"],
                through:{
                    attributes:[]
                }
                }]
        })
        if(!dog) throw new Error('Breed not found');
        const parseDog = JSON.parse(JSON.stringify(dog));
        parseDog.temperaments = await parseDog.temperaments.map(e => e.name).join();
        return res.status(200).send(parseDog)
    } catch (err) {
        return res.status(404).send(err.message)
    }
})

dogRoutes.post('/', async (req , res)=>{
    const { name, height, weight, lifeSpan, image, temperament } = req.body;
    if(!name || !height || !weight || !lifeSpan || !temperament) return res.status(400).send('faltan parametros');
    const existsBreed = await getAllDogs(name);
    if(existsBreed.length) return res.status(400).send('Existing breed')
   const newDog = await createBreed(name, height, weight, lifeSpan, image, temperament)
    return res.status(201).json(newDog);
})


export default dogRoutes;