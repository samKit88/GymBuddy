const Workout = require("../model/workoutModel.js");
const mongoose = require("mongoose");

//get all workout
const getAllWorkout = async (req, res) => {

    const workout = await Workout.find({});

    if (!workout) {
      return res.status(404).json({ error: "There are no workouts!" });
    }
    res.status(200).json(workout);

};

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    
    //Check the id based on mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such file!" });
    }

    const workout = await Workout.findById(id);
    //Check if it exsist
    if (!workout) {
      return res.status(404).json({ error: "No such file!" });
    }
    res.status(200).json(workout);
  };

//create workout
const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  console.log(req.body)
  
  const emptyFields = [];


  if(!title) {
    emptyFields.push('title');
  };

  if(!reps) {
    emptyFields.push('reps');
  };

  if(!load) {
    emptyFields.push('load');
  };


  if(emptyFields.length > 0) {
   return res.status(400).json({ error: 'Please fill all the fields', emptyFields});
  };  
  
  try {
    const workout = await Workout.create({ title, reps, load });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

    //Check the id based on mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such file!" });
    }

    const workout = await Workout.findByIdAndDelete(id);

    //Check if it exsist
    if (!workout) {
      return res.status(404).json({ error: "No such file!" });
    }

    res.status(200).json(workout);
};

//update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "No sucdh file!" });
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {...req.body});

    //Check if it exsist
    if (!workout) {
      return res.status(404).json({ error: "No such file!" });
    }
    res.status(200).json(workout);

  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllWorkout,
  getSingleWorkout,
  postWorkout,
  deleteWorkout,
  updateWorkout
};
