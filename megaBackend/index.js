const express = require('express');
const app = express();

require("dotenv").config();

const port= process.env.PORT || 3000;

//parsing middleware
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const {dbconnect} = require('./config/database');
dbconnect();
const cloudinary = require("./config/cloudinaryupload");
cloudinary();

//import route and mounte
const routepath =require('./routs/connectingpath');
app.use("/api/v1", routepath);


app.listen(port, ()=>{
    console.log(`applicetion started successfully at port ${port}`);

})

app.get("/", (req,res)=>{
    res.send("<h1>home page is render</h1>")
})