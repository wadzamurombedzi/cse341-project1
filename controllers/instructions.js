const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('instructions').find();
    result.toArray().then((instructionsController) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(instructions);
    });
};

const getSingle = async (req, res) => {
    const instructionsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('instructions').find({_id: instructionsId});
    result.toArray().then((instructions) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(instructions);
    });
};

module.exports = {
    getAll, 
    getSingle
};