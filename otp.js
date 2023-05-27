const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mobileSchema = new Schema({
   
    email:{
        type:String,
    },
    textbox:{
        type:String,

    }
    
})
let mobileDATA = mongoose.model('otp',mobileSchema)
module.exports = mobileDATA;