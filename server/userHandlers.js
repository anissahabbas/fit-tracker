const e = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = 'FINAL-PROJECT';


const getUserbyId = () => {

}

const addUser = async (req, res) => {
    const _id = req.params._id;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db(dbName);
    //console.log(db.collection('users'));
    db.collection('users').findOne({ _id }, async (err, result) => {
        console.log(result);
        if (result) {
            res.status(200).json({
                status: 200,
                message: 'User already in db',
                data: req.params
            })
        } else {
            console.log('hello')
            const newUser = await db.collection('users').insertOne(req.body);
            client.close();
            res.status(201).json({
                status: 201,
                message: 'success!',
                data: newUser
            })
        }
    });
}

module.exports = { addUser, getUserbyId };