const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//routers
const workoutRouter = require("./routes/workoutRoutes.js");
const userRouter = require('./routes/userRoutes.js');

//create app
const app = express();

//middleware
app.use(express.json());

//Routers
app.use("/api/workout", workoutRouter);
app.use("/api/user", userRouter);

//connect to db
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    //listen
    app.listen(process.env.PORT, () => {
      console.log(`Database is connected and Server is runing on port  ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
