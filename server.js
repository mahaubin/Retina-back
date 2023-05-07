require('dotenv').config({ path: './config/.env' });
require('./config/db')
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoute = require('./Route/userRoute');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
app.use('/api/user', userRoute);
app.listen(process.env.PORT, (req, res) => {
      console.log('Le serveur demarre sur le port ', process.env.PORT);
    });
