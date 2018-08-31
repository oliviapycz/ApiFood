const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const proposedFoodSchema = new mongoose.Schema({
    food: {
        type: String,
        trim: true,
        required: 'Please enter a food name'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Define our indexes
proposedFoodSchema.index({
    food: 'text'
});

module.exports = mongoose.model('ProposedFood', proposedFoodSchema);