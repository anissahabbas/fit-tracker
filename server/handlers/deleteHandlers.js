const { sendResponse } = require('./utils');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const deleteItem = async (req, res) => {
    try {
        const _id = req.params.workoutId;
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        await db.collection(collectionName).deleteOne({_id: _id})
        client.close()
        sendResponse({
            res,
            status: 200,
            message: 'item deleted'
        })
    } catch (err) {
        sendResponse({
            res,
            status: 400,
            message: err.message
        })
    }
}

const deleteWorkout = (req, res) => {
    deleteItem(req, res, 'workout-list');
}

const deleteExercise = (req, res) => {
    deleteExercise = (req, res, 'exercise-list')
}

module.exports = { deleteWorkout };