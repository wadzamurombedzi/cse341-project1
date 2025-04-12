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

const createInstructions = async (req, res) => {
    const instructionsId = new ObjectId(req, params.id);
    const instructions = {
        patientName: req.body.patientName,
        patientSurname: req.body.patientSurname,
        email: req.body.email,
        address: req.body.patientAddress,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('instructions').replaceOne({_id: instructionsId}, instructions);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the medicals.');
    }
};

const updateInstructions = async (req, res) => {
    const instructionsId = new ObjectId(req.params.id);
    const user = {
        name: req.body.name,
        tablets: req.body.tablets,
        dosage: req.body.dosage,
        timing: req.body.timing,
        period: req.body.period,
        instructed : req.body.instructed 
    };
    const response = await mongodb.getDatabase().db().collection('instructions').replaceOne({_id: instructionsId}, instructions);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred updating the instructions.');
    }
};

const deleteInstructions = async (req, res) => {
    const deleteId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('instructions').remove({ _id: instructionsId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the instructions.')
    }
};



module.exports = {
    getAll, 
    getSingle,
    createInstructions,
    updateInstructions,
    deleteInstructions
};