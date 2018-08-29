const mongoose = require('mongoose');
const Food = require('../models/Food')
mongoose.model('Food');

export const findFoods = async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
};

export const findFood = async (req, res) => {
    const food = await Food.findOne({ food: req.params.food});
    // if (!food) return next();
    console.log('findFood', food)
    res.json(food);
};


// exports.searchFood = async (req, res) => {
//     console.log(req.query.q);
    
//     const foods = await Food.find({
//         $text: { //$text is from mongodb for indexes
//             $search: req.query.q
//         }
//     }, {
//         score: { $meta: 'textScore' } //from mongo give a score (add a field called score) depending on the number of time the query appears
//     })
//     .sort({
//         score: { $meta: 'textScore' }
//     })
//     .limit(5);
//     res.json(foods);
// };