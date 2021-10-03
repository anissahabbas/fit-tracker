const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const assert = require('assert');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = 'FINAL-PROJECT';

//data
const users = require('./dummydata/users');
const exerciseListData = require('./dummydata/listData');
const workoutListData = require('./dummydata/listData');
const workoutsCompleted = require('./dummydata/completedLists');
const exercisesCompleted = require('./dummydata/completedLists');

const batchImport = async (collectionName, data) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection(collectionName).insertMany(data);
        assert.equal(data.length, result.insertedCount)
        console.log(result);
        client.close();
    } catch (err) {
        console.log(err.stack, err.message);
    }
}

batchImport('exercise-list', exerciseListData.exerciseListData);
/* batchImport('exercises-completed', exercisesCompleted.exercisesCompleted);
batchImport('workout-list', workoutListData.workoutListData);
batchImport('workouts-completed', workoutsCompleted.workoutsCompleted); */
//batchImport('users', users.users); 

//console.log(users.users);
//console.log(exerciseListData);