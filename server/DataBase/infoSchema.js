const mongoose = require("mongoose")

const infoSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true, 
    },
    middlename:{
        type:String, 
    },
    lastname:{
        type:String,
        require:true, 
    },
    registraiton_no:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    rollno:{
        type:String,
        require:true
    },
    division:{
        type:String,
        require:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model('studentinfo',infoSchema)