import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js'; 
import short_url from './src/routes/shortUrl.route.js';
import auth_routes from './src/routes/auth.routes.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cookieParser from "cookie-parser";
import {attachUser} from "./src/utils/attachUser.js"
dotenv.config('./.env');
import user_route from './src/routes/user.route.js';
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(cookieParser());
app.use(attachUser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Route handlers come BEFORE error handler
app.use('/api/create', short_url);
app.use('/api/auth', auth_routes);
app.use('/api/user',user_route);
app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

app.get('/:id', redirectFromShortUrl);

// ✅ Error handler always LAST
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
};

startServer();
