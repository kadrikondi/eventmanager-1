

const mongoose = require("mongoose");


const Users = mongoose.Schema({
    name:String,
    email: {type:String},
    username:{type:String},
    password:{type:String},
    join:  {type:Date, Default:Date.now() }
    


})
module.exports = mongoose.model('Users', Users);