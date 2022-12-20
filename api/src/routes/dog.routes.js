import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { getAllDogs, getDogApi } from "../helpers/APIconnection.js";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

const dogRoutes = Router();

dogRoutes.get('/', async (req, res)=>{
    const { name } = req.query;
    try{
       const dogs = await getAllDogs(name);
       if(!dogs) res.status(404).send('not found')
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
    const { name, height, weight, lifeSpan, image, temperaments } = req.body;
    if(!name || !height || !weight || !lifeSpan || !temperaments) return res.status(400).send('faltan parametros');
    const existsBreed = await BREED.findOne({where:{name}});
    if(existsBreed) return res.status(401).send('Existing breed')
 
    const newDog = await BREED.create(
        {
        id:'m'+uuidv4(),
        name,
        height,
        weight,
        lifeSpan,
        image,
    });
    await temperaments.map(async t =>{
        const [temperament, boolean] = await TEMPERAMENT.findOrCreate({
          where:{name:t}
        })
      newDog.addTemperaments(temperament)
    });
  

    return res.status(201).json(newDog);
})


export default dogRoutes;