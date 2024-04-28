const mongoose = require('mongoose');


const subsectionSchema = new mongoose.Schema({
    title:{
        type: 'string',
        trim: true,
        required: true,
    },
    timeduration:{
        type: "number",
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    },
    videoUrl:{
        type: "string",
        required: true,
    }

  
})


module.exports= mongoose.model("Subsection", subsectionSchema);