const mongoose = require('mongoose')

const Center = mongoose.Schema({
    name: String,
    address: String,
    capacity: Number,
})

module.exports = mongoose.model('Center', Center)