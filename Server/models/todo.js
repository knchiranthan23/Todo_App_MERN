const mongoose = require('mongoose');
const User = require('../models/user')
const todoSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    completed :{
        type : Boolean,
        required : true
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref:User,
        required : true
    }
})

module.exports = mongoose.model("Todo",todoSchema);