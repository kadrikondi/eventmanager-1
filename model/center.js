const mongoose = require('mongoose')

const Center = mongoose.Schema({
    name: String,
    address: {
        type: String
    },
    capacity: {
        type: Number
    },
    image: {
        type: String
    },
    contactinfo: {
        type: String
    },
    uploadby:{
        type:String
    }

})
module.exports = mongoose.model('Center', Center)



