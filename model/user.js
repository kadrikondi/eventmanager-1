const mongoose = require('mongoose')

const User = mongoose.Schema({
    username:{ type : String},
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String
    },
    gender: {
        type: String
    },
    center: [{ type: mongoose.Schema.Types.ObjectId, ref:'center'
}],
})
module.exports = mongoose.model('User', User)