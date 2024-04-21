const subSection = require("../models/subsection");
const Section = require("../models/section");
const {imageUploadToCloudinary}= require("../utility/imageUpload")
require("dotenv").config();


//create subSection
exports.createSubSection = async (req,res)=>{
    try{
        //date fetch
        const {title,timeduration,description,sectionId} = req.body;
        //video file extract
        const video = req.files.videoFile;
        //validating

        if(!title ||!timeduration || !description ||!sectionId || !video){
            return res.status(400).json({
                success: false,
                message:" all are required"
            })
        }
        //video upload in cloudinary

        const videuploadtoCloudinary = await imageUploadToCloudinary(video, process.env.FOLDER_NAME);
        //create subsection
        const createSubSection = await subSection.create({
            title,
            timeduration,
            description,
            videoUrl:videuploadtoCloudinary.secure_url,
        })

        //update it to section schema
        await Section.findByIdAndUpdate(
            sectionId,
            {
                $push:{
                    subsection:createSubSection._id,
                 }
             },
             {new:true},
        )
        //return responce
        return res.status(200).json({
            success: true,
            message: "subsection create successfullyu",
            createSubSection,
        })

    }
    catch(error){
        console.log("error in create subsection", error)
        return res.status(500).json({
            success: false,
            message: "error while creating subsection",
            error: error.message,
        })
     }
}