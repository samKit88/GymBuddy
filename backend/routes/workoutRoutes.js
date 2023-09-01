const express = require('express');

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
router.post('/', (req, res) => {
    res.json({mssg: 'Post workout'});
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