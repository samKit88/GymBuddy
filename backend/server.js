const express = require('express');
const workoutRouter = require('./routes/workoutRoutes.js')
require('dotenv').config();


//create app
const app = express();

//middleware
app.use(express.json());

//Routers
app.use('/api/workout', workoutRouter);

//listen 
app.listen(process.env.PORT, () => {
    console.log(`Server is runing! in port # ${process.env.PORT}`);
}); 