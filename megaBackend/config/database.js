const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = ()=> {
    mongoose.connect(process.env.DB__URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {console.log("database connect successfully")})
    .catch((err)=>{
        console.log("database connection faield");
        console.error(err);
        process.exit(1);
    })
}