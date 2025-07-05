import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from "./src/config/mongo.config.js"; 
import { connect } from 'mongoose';
import urlSchema from "./src/models/shorturl.model.js";
import short_url from './src/routes/shortUrl.route.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';

dotenv.config('./.env');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/create',short_url);
app.get('/',(req,res)=>{
    res.send('Welcome to the URL Shortener API');
})


app.get('/:id', redirectFromShortUrl);

app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
};

startServer();