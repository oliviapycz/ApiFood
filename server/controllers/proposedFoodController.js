const mongoose = require('mongoose');
const ProposedFood = require('../models/ProposedFood')
mongoose.model('ProposedFood');

export const proposeFood = async (req, res) => {
    console.log('in model', req.body);
    
    const proposedFood = await (new ProposedFood(req.body)).save();
    console.log('ProposedFood', proposedFood)
    res.json(proposedFood);
};

export const findProposedFood = async (req, res) => {
    const proposedFood = await ProposedFood.findOne({ food: req.params.food});
    // if (!food) return next();
    console.log('findProposedFood', proposedFood)
    res.json(proposedFood);
};