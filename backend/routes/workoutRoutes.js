const express = require('express');
const {getAllWorkout, getSingleWorkout, postWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController.js');


const router = express.Router();

//get all workouts
router.get('/', getAllWorkout);

//get workout by id
router.get('/:id', getSingleWorkout);

//post workout
router.post('/', postWorkout);


//delete workout
router.delete('/:id', deleteWorkout);

//update workout
router.patch('/:id', updateWorkout);

module.exports = router;