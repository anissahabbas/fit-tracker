const { getListById, addItem } = require('./handlerUtils');
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


module.exports = { getExercisesByUser, addExercise };