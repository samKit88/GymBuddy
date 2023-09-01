const express = require('express');
const Workout = require("../model/workoutModel.js");

const router = express.Router();

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'});
});

//get workout by id
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a workout'});
});

//post workout
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);

    }catch(error){
        res.status(400).json({
            error: error.message
        });
    }
});


//delete workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'});
});

//update workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'});
});

module.exports = router;