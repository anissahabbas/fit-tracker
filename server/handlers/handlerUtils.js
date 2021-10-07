
const assert = require('assert');
const { MongoClient } = require('mongodb');

const { sendResponse } = require('./utils');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const getListById = async (req, res, collectionName) => {
  try {
    const userId = req.params.userId;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('FINAL-PROJECT');
    const userList = await db
      .collection(collectionName)
      .find({ $or: [{ user_id: userId }] })
      .toArray();
    client.close();
    sendResponse({
      res,
      status: 200,
      data: userList
    });
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: err.message
    })
  }
}

const addItem = async (req, res, collectionName, newItem) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db('FINAL-PROJECT');
    const result = await db.collection(collectionName)
      .insertOne(newItem);
    sendResponse({
      res,
      status: 201,
      data: newItem
    });
  }
  catch (err) {
    sendResponse({
      res,
      status: 400,
      data: newItem,
      message: err.message
    })
    client.close();
  }
}

module.exports = { getListById, addItem };
