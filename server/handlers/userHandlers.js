const { v4: uuidv4 } = require('uuid');
const { sendResponse } = require('./utils');

const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const getUserByEmail = async (req, res) => {
    try {
        const email = req.body.email;
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('FINAL-PROJECT');
        const result = await db
            .collection('users')
            .find({ $or: [{ email: email }] })
            .toArray()
        if (result.length) {
            sendResponse({
                res,
                status: 200,
                data: result,
                dataSent: req.body,
                message: 'User found!'
            })
        } else {
            const newUser = {
                _id: uuidv4(),
                ...req.body
            }
            const client = new MongoClient(MONGO_URI, options);
            await client.connect();
            const db = client.db('FINAL-PROJECT');
            db.collection('users').insertOne(newUser)
            sendResponse({
                res,
                status: 200,
                data: [newUser],
                message: 'new user added!'
            })
        }
        client.close()
    } catch (err) {
        sendResponse({
            res,
            status: 500,
            message: err.message,
            dataSent: req.body
        })
    }
}


module.exports = { getUserByEmail };