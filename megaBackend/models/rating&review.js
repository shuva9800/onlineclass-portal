const mongoose = require('mongoose');


const ratingandreviewSchema = new mongoose.Schema({
    user:{
        type: 'string',
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


module.exports= mongoose.model("Rating&Review", ratingandreviewSchema);