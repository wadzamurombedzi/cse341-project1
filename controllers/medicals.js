const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Medicals']
    const result = await mongodb.getDatabase().db().collection('medicals').find();
    result.toArray().then((medicals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(medicals);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Medicals']
    const medicalsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('medicals').find({_id: medicalsId});
    result.toArray().then((medicals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(medicals);
    });
};

const createMedicals = async (req, res) => {
    //#swagger.tags=['Medicals']
    const medicalsId = new ObjectId(req.params.id);
    const medicals = {
        name: req.body.name,
        tablets: req.body.tablets,
        dosage: req.body.dosage,
        timing: req.body.timing,
        period: req.body.period,
        instructed_by:req.body.instructed_by
    };
    const response = await mongodb.getDatabase().db().collection('medicals').insertOne(medicals);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the medicals.');
    }
};

const updateMedicals = async (req, res) => {
    //#swagger.tags=['Medicals']
    const medicalsId = new ObjectId(req.params.id);
    const user = {
        name: req.body.name,
        tablets: req.body.tablets,
        dosage: req.body.dosage,
        timing: req.body.timing,
        period: req.body.period,
        instructedBy: req.body.instructedBy
    };
    const response = await mongodb.getDatabase().db().collection('medicals').replaceOne({_id: medicalsId}, medicals);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred updating the medicals.');
    }
};

const deleteMedicals = async (req, res) => {
    //#swagger.tags=['Medicals']
    const medicalsId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('medicals').deleteOne({ _id: medicalsId });
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the medicals.')
    }
};

module.exports = {
    getAll, 
    getSingle,
    createMedicals,
    updateMedicals,
    deleteMedicals
};