

"use strict";

const express = require('express');
const morgan = require('morgan');

const { getUserByEmail } = require('./handlers/userHandlers');
const { getExercisesByUser, addExercise } = require('./handlers/exerciseHandlers');
const { getWorkoutsByUser, addWorkout, getWorkoutsCompletedByUser } = require('./handlers/workoutHandlers');

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

.get('/workoutsCompleted/:userId', getWorkoutsCompletedByUser)

.post('/user', getUserByEmail)

//to Do
.get('/workout/:workoutId')

.post('/completedWorkouts')
.post('/completedExercises')

.get('/completedExercise/:exerciseId')
// endpoints above here ^^^^^

.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })


.listen(4000, () => console.log(`Listening on port 4000`));

