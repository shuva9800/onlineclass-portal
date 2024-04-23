const coures = require("../models/courses")
const tag = require("../models/tags")
const User = require("../models/users")
const {imageUploadToCloudinary} = require("../utility/imageUpload")
// 1.check for instractor line no:19 or near by
exports.courseCreate = async (req,res)=>{
    try{
        // fetch data
        const{courseName, courseDescription,whatYouWillLearn,price,tags}= req.body;
        //get file
        const file= req.files.thumbnil;
        // validation
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tags || !file){
            return res.status(401).json({
                success: false,
                message:" all field to be field"
            })
        }
        //???????
         //check for instructor
         const userId = req.findPerson.id;
         const instructorDetails = await User.findById(userId);
         console.log("Instructor Details: " , instructorDetails);
         //TODO: Verify that userId and instructorDetails._id  are same or different ?
 
         if(!instructorDetails) {
             return res.status(404).json({
                 success:false,
                 message:'Instructor Details not found',
             });
         }

         //check given tags is valid or not 
         const tagDetails = await tag.findById({tag});
         if(!tagDetails){
            return res.status(404).json({
                success:false,
                message:'Tag detils not found',
            })
         }
         //upload image to cloudniary
         const thumbnilImage = await imageUploadToCloudinary(file, process.env.FOLDER_NAME);
         //Db entry for new course
         const newCourse = await coures.create({
            courseName,
             courseDescription,
             whatYouWillLearn,
             price,
             tags:tagDetails._id,  //is needed tagDetails._id
             thumbnil:thumbnilImage.secure_url,
             instructor: instructorDetails._id,//action required?
         })

         //adding the new course  to user schema
         await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
                {
                    $push: {courses:newCourse.id,

                }
            },
            {new: true}
        ).populate("courses")//?? needded?
        .exec();

        //update Tag schema
        await tag.findByIdAndUpdate(
            {_id:tagDetails._id},
            {course: newCourse._id},
            {new: true},
        ).populate("course")//?? needded?
        .exec();


    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            succcess: false,
            message :"error occure in course creation"
        })
    }
}

//get all coures

exports.getAllCourses= async (req,res)=>{
    try{
        const allCourses = await coures.find({});
        if(!allCourses){
            return res.status(404).json({
                success: false,
                message:"there is no coures available"
            })
        }

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "error occure white all course data fetching"
        })
    }
}

//find specific courses by given id
exports.getSpecificCourse =async (req,res)=>{
    try{
        //fetch datamean course id
        const {courseid} =  req.body;
        //validation
        if(!courseid){
            return res.status(400).json({
                success:false,
                message: "course is not found"
            })
        }
        const courseDetails = await coures.findById({_id: courseid})
                                                .populate(
                                                    {
                                                    path: "instractor",
                                                    populate:{
                                                        path: "additionalInfo"
                                                    },
                                                    }
                                                )
                                                .populate({
                                                    path: "courseContent",
                                                    populate:{
                                                        path: "additionalInfo",
                                                    },
                                                })
                                                .populate("ratingandreview")
                                                .populate(
                                                    {
                                                        path: "studentEnroll",
                                                        populate:{
                                                            path: "additionalInfo"
                                                        },
                                                    }
                                                )
                                                .populate("catagory")
                                                .exec();
       
       if(!courseDetails){
        return res.status(400).json({
            success:false,
            message:`course is not found which course id is:- ${courseid}`,

        })
       }
       return res.status(200).json({
        success:true,
        message:"course fetch successfully",
        data: courseDetails,
       })                                       
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "error occure white  course data fetching by course id"
        })
    }

}