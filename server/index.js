

"use strict";

const express = require('express');
const morgan = require('morgan');

const { getUserByEmail } = require('./handlers/userHandlers');
const { getExercisesByUser, addExercise } = require('./handlers/exerciseHandlers');
const { getWorkoutsByUser, addWorkout, getWorkoutsCompletedByUser, getWorkoutById } = require('./handlers/workoutHandlers');
const { addCompletedWorkout, addCompletedExercise, getCompletedExercise } = require('./handlers/completedHandlers');

//require handlers up here

express()
.use(morgan('tiny'))
.use(express.json())

.use(express.static("public"))

// endpoints below

.get('/exercises/:userId', getExercisesByUser)
.post('/exercises', addExercise)

.get('/workouts/:userId', getWorkoutsByUser)
.post('/workouts', addWorkout)


.post('/user', getUserByEmail)

//to Do
.get('/workout/:workoutId', getWorkoutById)

.post('/workoutsCompleted', addCompletedWorkout)
.post('/exercisesCompleted', addCompletedExercise)

.get('/workoutsCompleted/:userId', getWorkoutsCompletedByUser)
.get('/exerciseCompleted/:exerciseId/:userId', getCompletedExercise) 
// endpoints above here ^^^^^

.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })


.listen(4000, () => console.log(`Listening on port 4000`));

