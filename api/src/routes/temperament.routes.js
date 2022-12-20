import { response, Router } from "express";
import { Op } from "sequelize";
import { getTemperament } from "../helpers/APIconnection.js";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

const temperamentRoutes = Router();

temperamentRoutes.get('/', async (req, res)=>{
    try {
        const response = await getTemperament();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

export default temperamentRoutes;