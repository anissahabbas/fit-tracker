const { getListById, addItem } = require('./handlerUtils');
const { sendResponse } = require('./utils');

const { v4: uuidv4 } = require('uuid');

const getWorkoutsByUser = (req, res) => {
    getListById(req, res, 'workout-list');
}

const getWorkoutsCompletedByUser = (req, res) => {
    getListById(req, res, 'workouts-completed');

}

const addWorkout = (req, res) => {
    const newWorkout = {
        _id: uuidv4(),
        ...req.body
    }
    addItem(req, res, 'workout-list', newWorkout);
}

module.exports = { getWorkoutsByUser, addWorkout, getWorkoutsCompletedByUser };