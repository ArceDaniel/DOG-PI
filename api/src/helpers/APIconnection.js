import axios from 'axios'
import { Op } from 'sequelize';
import BREED from '../models/Dog.js';
import TEMPERAMENT from '../models/Temperaments.js';


const getAllDogs = async (name) => { 
    
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    if(!name){
    var dogsApi = await api.data.map(e => {
        return {
            image : e.image.url,
            name : e.name,
            temperament : e.temperament,
            weight: e.weight.imperial,
            height: e.height.imperial,
            id : e.id,
            lifeTime : e.life_span
        }
    })
    var dogsDB = await BREED.findAll({
            include:[{
                model:TEMPERAMENT,
                attributes: ["name"],
                through:{
                    attributes:[]
                }
                }]
        })
        dogsDB = await dogsDB.map( e =>{
            e = JSON.parse(JSON.stringify(e));
            e.temperaments = e.temperaments.map(e => e.name).join();
            return e;
        })
        
        var dog = [...dogsDB, ...dogsApi]
    }else{
        console.log(name)
        var dogsApi = await api.data.filter(e => e.name.toLowerCase() == name.toLowerCase())
        .map(e => {
            return {
                image : e.image.url,
                name : e.name,
                temperament : e.temperament,
                weight: e.weight.imperial,
                height: e.height.imperial,
                id : e.id,
                lifeTime : e.life_span
            }
        });
        var dogsDB = await BREED.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                },
            },
            include:[{
                model:TEMPERAMENT,
                attributes: ["name"],
                through:{
                    attributes:[]
                }
                }]
        })
        dogsDB = await dogsDB.map( e =>{
            e = JSON.parse(JSON.stringify(e));
            e.temperaments = e.temperaments.map(e => e.name).join();
            return e;
        })
        var dog = [...dogsApi, ...dogsDB]
    }
        return dog
    }

    const getTemperament = async () => { 
        const temperamentDB = await TEMPERAMENT.findAll();
        if(temperamentDB.length) return temperamentDB.map(e => e.name);
    

        const api = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        const tempApi = await api.data.map(el => el.temperament)
                                      .join()
                                      .split(',')
                                      .map( e => e.trim())
                                      .map(name => {
                                       return TEMPERAMENT.findOrCreate({
                                                 where : {name}
                                                })
                                      });
   
        return getTemperament();
        }

const getDogApi = async (id) => { 
    const dogs = await getAllDogs()  
    let foundDog = await dogs.find(d => d.id === parseInt(id))
    return foundDog   
}

export{
    getAllDogs,
    getTemperament,
    getDogApi
}