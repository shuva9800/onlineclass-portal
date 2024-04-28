const mongoose = require('mongoose');


const catagorySchema = new mongoose.Schema({
  name:{
    type:"string",
    required: true
    
  },
  description:{
    type: "string",
    required:true
  },
  course: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course",
}],

  
})


module.exports= mongoose.model("Catagory", catagorySchema);