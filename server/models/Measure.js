const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const measureSchema = new mongoose.Schema({
    measure: {
        type: String,
        trim: true,
        required: 'Please enter a measure name'
    },
    created: {
        type: Date,
        default: Date.now
    },
    shortcut: {
        type: String,
        trim: true,
        required: 'Please enter a shortcut measure name'
    },
});

module.exports = mongoose.model('Measure', measureSchema);