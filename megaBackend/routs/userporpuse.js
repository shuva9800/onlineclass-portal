const express = require("express")
const router = express.Router();

const {checkAuthentication} = require("../middleware/authorize")


//profile handler function import
const {updateProfile,deleteAccount,getAllDetails , updateDisplayPicture,
    getEnrolledCourses} = require("../controller/profilehandler");


//map handler function with path
router.post("/updateProfile",checkAuthentication,updateProfile); 
router.post("/deleteAccount",checkAuthentication,deleteAccount);
router.post("/deleteAccount",checkAuthentication,deleteAccount);    
router.get("/deleteAccount",checkAuthentication,deleteAccount);  
//enroll course
router.get("/getEnrolledCourses",checkAuthentication,getEnrolledCourses);    
router.post("/updateDisplayPicture",checkAuthentication,updateDisplayPicture); 


//exports route
module.exports = router;


