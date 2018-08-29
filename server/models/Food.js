const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const foodSchema = new mongoose.Schema({
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
foodSchema.index({
    food: 'text'
});

module.exports = mongoose.model('Food', foodSchema);