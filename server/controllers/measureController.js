const mongoose = require('mongoose');
const Measure = require('../models/Measure')
mongoose.model('Measure');

exports.findMeasures = async (req, res) => {
    const measures = await Measure.find();
    if (!measures) return res.send('nothing in the db yet');
    console.log('findMeasures', measures);
    res.json(measures);
};

exports.findMeasure = async (req, res) => {
    const measure = await Measure.findOne({ measure: req.params.measure});
    if (!measure) return '';
    console.log('findMeasure', measure);
    res.json(measure);
};