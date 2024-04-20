const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = ()=> {
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