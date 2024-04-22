const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    gender:{
        type: 'string',
        required: true,
    },
    dateOfbirth:{
        type: 'string',
    },
    aboute:{
        type: 'string',
        trim:true
    },
    contactNumber:{
        type: Number,
        trim:true,
    }


})


module.exports= mongoose.model("Profile", profileSchema);