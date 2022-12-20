import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const BREED = sequelize.define('breed', {
    
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  height: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  life_span: {
    type: DataTypes.STRING

  },

  image: {
    type: DataTypes.TEXT,
  },

  apiId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }


}, { timestamps: false });

export default BREED;