const assert = require('assert');
const { MongoClient } = require('mongodb');

const { sendResponse, createMonthData, getMostCommon } = require('./utils');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const getStats = async (req, res) => {
    const today = new Date();
    try {
        const userId = req.params.userId;
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        const workoutList = await db
            .collection('workouts-completed')
            .find({ $or: [{ user_id: userId }] })
            .toArray();
        const exerciseList = await db
            .collection('exercises-completed')
            .find({ $or: [{user_id: userId}]})
            .toArray();
        client.close();
        console.log(exerciseList, 'hit');
        console.log(workoutList, 'hit');
        const monthData = createMonthData(workoutList);
        const totalWorkouts = workoutList.length
        const workoutsThisMonth = workoutList.filter((workout) => workout.month === today.getMonth()).length;
        const totalExercises = exerciseList.length;
        const exercisesThisMonth = exerciseList.filter((exercise) => exercise.month === today.getMonth()).length;
        const mostCommonWorkout = getMostCommon(workoutList).name;
        const mostCommonExercise = getMostCommon(exerciseList).name;
       sendResponse({
            res,
            status: 200,
            message: 'data found!',
            data: {
                monthData,
                totalWorkouts,
                workoutsThisMonth,
                mostCommonWorkout,
                mostCommonExercise,
                exercisesThisMonth,
                totalExercises
            }
          });
    } catch (err) {
           sendResponse({
            res,
            status: 500,
            message: err.message,
            data: []
          })
    }
};

module.exports = { getStats }