//import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const Event = mongoose.Schema({
    name:String,
    date:Date,
    startTime:String,
    endTime:String,
    type:String,


})
module.exports = mongoose.model('Event', Event);