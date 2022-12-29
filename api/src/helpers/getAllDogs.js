import axios from "axios";
import { Op } from "sequelize";
import BREED from "../models/Dog.js";
import TEMPERAMENT from "../models/Temperaments.js";

const getAllDogs = async (name) => {
  const api = await axios.get(`https://api.thedogapi.com/v1/breeds`);

  if (!name) {
    const dogsApi = await api.data.map((e) => {
      return {
        image: e.image.url,
        name: e.name,
        temperaments: e.temperament,
        weight: e.weight.imperial,
        height: e.height.imperial,
        id: e.id,
        lifeSpan: e.life_span,
        isDB: false,
      };
    });
    const dogsDB = await BREED.findAll({
      include: [
        {
          model: TEMPERAMENT,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const dogsDBMap = await dogsDB.map((e) => {
      e = JSON.parse(JSON.stringify(e));
      e.temperaments = e.temperaments.map((e) => e.name).join();
      return e;
    });

    return [...dogsDBMap, ...dogsApi];
  }

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
  );

  const filterDogs = [];
  await data.forEach(async (e) => {
    const date = await api.data.find((f) => f.name === e.name);
    if (date) filterDogs.push(date);
  });

  const dogsApi = filterDogs.map((e) => {
    return {
      image: e.image.url,
      name: e.name,
      temperaments: e.temperament,
      weight: e.weight.imperial,
      height: e.height.imperial,
      id: e.id,
      lifeSpan: e.life_span || e.lifeTime,
      isDB: false,
    };
  });

  const dogsDB = await BREED.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [
      {
        model: TEMPERAMENT,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  const dogsDBMap = await dogsDB.map((e) => {
    e = JSON.parse(JSON.stringify(e));
    e.temperaments = e.temperaments.map((e) => e.name).join();
    return e;
  });
  return [...dogsDBMap, ...dogsApi];
};
export default getAllDogs;
