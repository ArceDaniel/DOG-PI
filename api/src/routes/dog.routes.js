import { Router } from "express";
import { Op } from "sequelize";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

const dogRoutes = Router();

dogRoutes.get('/', async (req, res)=>{
    const { name } = req.query;
    try{
        if(!name){
            var dogs = await BREED.findAll({include: [TEMPERAMENT]});
        }
        else{
            var dogs = await BREED.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: [TEMPERAMENT]
            })
        }
        return res.status(200).json(dogs);

        }catch(err){
            return res.status(400).send(err.message)
    }
})

dogRoutes.get('/:idRaza', async (req,res)=>{
    const { idRaza } = req.params;

    try {
        const dog = await BREED.findByPk(idRaza, {
            include: TEMPERAMENT
        })
        if(!dog) throw new Error('Breed not found')
        return res.status(200).json(dog)
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
        name,
        height,
        weight,
        lifeSpan,
        image,
    });
    const addTemperaments = await temperaments.map(async t =>{
        const [temperament, boolean] = await TEMPERAMENT.findOrCreate({
          where:{name:t}
        })

      newDog.addTemperaments(temperament)
    });
    Promise.all(addTemperaments);
    return res.status(201).json(addTemperaments);
})


export default dogRoutes;