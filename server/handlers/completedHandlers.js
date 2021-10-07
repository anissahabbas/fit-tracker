const { sendResponse } = require('./utils');
const { addItem } = require('./handlerUtils');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

//mongo stuff
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const addCompletedWorkout = (req, res) => {
    const date = new Date();
    const newCompletedWorkout = {
        _id: uuidv4(),
        date: new Date(),
        month: date.getMonth(),
        displayDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
        ...req.body
    }
    addItem(req, res, 'workouts-completed', newCompletedWorkout);
}

const addCompletedExercise = (req, res) => {
    const date = new Date();
    const newCompletedExercise = {
        _id: uuidv4(),
        date: new Date(),
        month: date.getMonth(),
        displayDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
        ...req.body
    }
    addItem(req, res, 'exercises-completed', newCompletedExercise)
}

const getCompletedExercise = async (req, res) => {
    try {
        const user_id = req.params.userId;
        const exercise_id = req.params.exerciseId;
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        const results = await db
            .collection('exercises-completed')
            .find({
                user_id: user_id,
                exercise_id: exercise_id,
            })
            .toArray()
        const ResultWithLatestDate = results.reduce((prev, current) => {
            return prev.date > current.date ? prev : current
        })
        sendResponse({
            res,
            status: 200,
            data: ResultWithLatestDate,
            message: 'exercise data found!'
        })
    } catch (err) {
        sendResponse({
            res,
            status: 500,
            dataSent: '',
            message: err.message
        })
        client.close();
    }
}


module.exports = { addCompletedWorkout, addCompletedExercise, getCompletedExercise }