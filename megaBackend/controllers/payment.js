const {instance} = require("../config/razorpay");
const User = require("../models/user");
const Course = require("../models/courses");
const mailSendeToUser = require("../utility/mailSender");


//order creation for payment -->when we click in the buy button

exports.capturePayment = async (req,res)=>{
    try{
        //user id and course id fetch
        const {CourseId} = req.body;
        const userId = req.findPerson.id
        //validation
        if(!CourseId){
            return res.satus(400).json({
                success: false,
                message: "please provide valid CourseId",
            })
        }
        //valid course id or not
        let courseDetails;
      try{
             courseDetails = await Course.findById(CourseId);
            if(!validCourse){
                return res.status(400).json({
                    success: false,
                    message: "could not find the course"
                })
            }
         //user already payed for this course or not
         const uid = new mongoose.Type.ObjectId(userId);
         if(Course.studentEnroll.includes(uid)){
            return res.status(400).json({
                success: false,
                message: "user is already buy this course no need to buy again"
            })
         }


      }
      catch(error){
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error.message,
                message: "occure error while user and course details fetching"

            })
      }       

        // order create
        const amount = courseDetails.price;
        currency = "INR";

        //create option
        const options = {
            amount :amount*100,
            currency,
            recipt: Math.random(Date.now()).toString(),
            notes :{
                user: userId,
                course:CourseId,
            },
        }
        try{
             //initiate the payment using razorpay
            const paymentResponse =await instance.orders.create(options);
            console.log(paymentResponse);
        }
        catch(error){
            console.log(error);
            return res.status(400).json({
                success: false,
                error: error.message,
                message: "could not initiate order"
            })
        }
        //return response
        return res.satus(200).json({
            success: true,
            message: "order initiate successfully",
            courseName: courseDetails.courseName,
            courseDescription: courseDetails.courseDescription,
            thumbnil: courseDetails.thumbnil,
            orderId: paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount,
        })
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error.message,
            message: "capture payment failed"
        })
    }
}

//verify signature

exports.verifySignature = async (req,res)=>{
    //this signature is present in server
    const webhookSecret = "12345";
    //coming sectrt key from razor pay
    const signature = req.headers["x-razorpay-signature"]
}