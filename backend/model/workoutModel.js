const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Please provied the title.']
    },
    reps: {
        type: Number,
        require: [true, 'Please provied the Reps.']
    },
    load: {
        type: Number,
        require: [true, 'Please provied the load.']
    }
}, {timestamps: true});


module.exports = mongoose.model('Workout', workoutSchema);