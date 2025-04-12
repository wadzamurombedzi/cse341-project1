const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('medicals').find();
    result.toArray().then((medicals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(medicals);
    });
};

const getSingle = async (req, res) => {
    const medicalsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('medicals').find({_id: medicalsId});
    result.toArray().then((medicals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(medicals);
    });
};

module.exports = {
    getAll, 
    getSingle
};