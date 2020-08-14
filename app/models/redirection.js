// CALL packages
const mongoose = require('mongoose');

// DEFINE schema
const urlSchema = mongoose.Schema({
    longUrl: String,
    shortUrl: String,
    code: String,
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: new Date()
    }
})

// EXPORT model
module.exports = mongoose.model('Url', urlSchema);