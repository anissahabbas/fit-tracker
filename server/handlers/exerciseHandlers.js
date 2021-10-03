const { getListById, addItem } = require('./handlerUtils');
const { sendResponse } = require('./utils');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const { v4: uuidv4 } = require('uuid');

const getExercisesByUser = async (req, res) => {
    getListById(req, res, 'exercise-list');
}

const addExercise = async (req, res) => {
    const newExercise = {
        _id: uuidv4(),
        ...req.body
    }
    addItem(req, res, 'exercise-list', newExercise);
}

const getExerciseCompletedById = async (req, res) => {
    try {
        const userId = '';
        const exerciseId = '';
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        const result = await db
            .collection('exercise-completed')
            .find( {$or: [
                {user_id: userId}
            ]})
            .toArray()
        console.log(result);
        const latestResult = '';
            sendResponse({
                res,
                status: 200,
                data: result,
                message: 'exercise data found!'
            })
    } catch (err) {
        console.log(err.stack)
        sendResponse({
            res,
            status: 500,
            dataSent: '',
            message: err.message
        })

    }
 }

module.exports = { getExercisesByUser, addExercise };