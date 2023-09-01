const express = require("express");
const workoutRouter = require("./routes/workoutRoutes.js");
const mongoose = require("mongoose");
require("dotenv").config();

//create app
const app = express();

//middleware
app.use(express.json());

//Routers
app.use("/api/workout", workoutRouter);

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
