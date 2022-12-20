import { Router } from "express";
import { Op } from "sequelize";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

temperamentRoutes = Router();