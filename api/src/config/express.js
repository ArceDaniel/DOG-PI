import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const expressApp = express();

// Middlewares
expressApp.use(express.json());
expressApp.use(morgan('dev'));
expressApp.use(cors());
expressApp.use(express.urlencoded({ extended: true }));

// Routes





export default expressApp;