import axios from 'axios'
import { Op } from 'sequelize';
import BREED from '../models/Dog.js';
import TEMPERAMENT from '../models/Temperaments.js';
import { v4 as uuidv4 } from 'uuid';

const getAllDogs = async (name) => { 
    
    const api = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    if(!name){
    var dogsApi = await api.data.map(e => {
        return {
            image : e.image.url,
            name : e.name,
            temperaments : e.temperament,
            weight: e.weight.imperial,
            height: e.height.imperial,
            id : e.id,
            lifeSpan : e.life_span,
            isDB:false
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

       const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);

       const filterDogs = []
       await data.forEach( async e => {
        const date = await api.data.find( f =>  f.name === e.name);
        if(date)
            filterDogs.push(date);
        
       })
      
       const dogsApi = filterDogs.map(e=>{
        return {
            image : e.image.url,
            name : e.name,
            temperaments : e.temperament,
            weight: e.weight.imperial,
            height: e.height.imperial,
            id : e.id,
            lifeTime : e.life_span,
            isDB:false,
        }
        })
       
      
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
        if(temperamentDB.length>100) return temperamentDB.map(e => e.name);
    

        const api = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        api.data.map(el => el.temperament)
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
    const foundDog = await dogs.find(d => d.id === parseInt(id))
    return foundDog   
}
const createBreed = async (name, height, weight, lifeSpan, image, temperament) =>{
    const newDog = await BREED.create(
        {
        id:'m' + uuidv4(),
        name,
        height,
        weight,
        lifeSpan,
        image,
        isDB:true,
    });
    await temperament.map(async t =>{
        const [temperament, boolean] = await TEMPERAMENT.findOrCreate({
          where:{name:t},
        })
      newDog.addTemperament(temperament)
    });
  
    return newDog;
}
export{
    getAllDogs,
    getTemperament,
    getDogApi,
    createBreed
}