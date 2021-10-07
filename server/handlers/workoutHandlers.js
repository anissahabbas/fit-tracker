const { getListById, addItem } = require('./handlerUtils');
const { sendResponse } = require('./utils');
const { v4: uuidv4 } = require('uuid');

//mongo stuff
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


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

const getWorkoutById = async (req, res) => {
    try {
        const _id = req.params.workoutId;
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        const result = await db
            .collection('workout-list')
            .findOne({ _id })
        sendResponse({
            res,
            status: 200,
            data: result,
            message: 'workout found!'
        });
    } catch (err) {
        sendResponse({
            res,
            status: 400,
            data: result,
            message: err.message
        });
       client.close();
    };
};

module.exports = { getWorkoutsByUser, addWorkout, getWorkoutsCompletedByUser, getWorkoutById };