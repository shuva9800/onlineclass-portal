const OTP = require('../models/otp');
const User = require('../models/user');
const  otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

// addition code in signup 

//send otp
exports.otpCreation = async (req,res) => {
    try{
        const {email}= req.body;
        const validUser = await User.findOne({email});

        if(validUser){
            return res.status(404).json({
                success: false,
                message: " User is already registered"
            })
        }
// otp generate
        let newOtp =otpGenerator.generate(6,{
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
         }) 
 //for unique otp creation
         let findOtp = await OTP.findOne({otp: newOtp});

            while(findOtp)
            {
                newOtp =otpGenerator.generate(6,{
                    upperCaseAlphabets: false,
                    specialChars: false,
                    lowerCaseAlphabets: false,
                 });
             findOtp = await OTP.findOne({otp: newOtp});

            }

//otp save in DB
         const saveOtp = await OTP.create({email, otp:newOtp});
         return res.status(200).json({
            success:true,
            message: "otp generate successfully",
            newOtp,
         })

    }
    catch(error){
        console.log("error in otpCreation section");
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//signup
exports.signUp = async (req,res) => {
try{
    //fetch data from req body
const {firstName, lastName, email,password,confirmPassword,accountType,phoneNumber,otp} = req.body;
//validation
if(!firstName || !lastName || !email || !password ||!confirmPassword ||!otp){
    return res.status(400).json({
        success:false,
        message: "please fill all the details"
    });
}
//two password match
if(password !== confirmPassword){
    return res.status(400).json({
        success:false,
        message: "password & confirmpasswor doesnot match please try again"
    });
}
//chech user alraedy exist
const validUser = await User.findOne({email});
if(validUser){
    return res.status(400).json({
        success:false,
        message:" user is already registered"
    });
}
//find most recent otp store in db for user
const recentOtp = await OTP.findOne({email}).sort({createdAt:-1}).limit(1);
console.log(recentOtp);

//validation for otp
if(recentOtp.length ==0){
    return res.status(400).json({
        success:false,
        message: "OTP not found"
    });
}else if(recentOtp !== otp){
    return res.status(400).json({
        success:false,
        message: "otp invalid"
    })
}
//has password
const hassPassword = await bcrypt.hash(password,10);

//check if password is hashed or not
if(!hassPassword){
    return res.status(400).json({
        success:false,
        message: " password not hashed"
    })
}
//create entry in db
//if need additional info to be add into db? code likhna padhaga


const user = await User.create({
    firstName, 
    lastName, 
    email,
    password:hassPassword,
    accountType,
    phoneNumber,additional
})

return res.status(200).json({
    success:true,
    message: "entry created in databaase for new user",
    data : user
})
}
catch(error){
    console.log("error in creating db entry for new user")
    console.log(error)
    return res.status(404).json({
        success:false,
        message: error.message,
        message: "error creating db entry for new user",

    })
}

}

//Login

exports.login = async (req, res) =>{
    try{
         const {email, password}= req.body;
         if(!email || !password){
            return res.status(401).json({
                success:false,
                message: "fill all the requirement"
            })
         }
         const findPerson = await User.findOne({email}).populate("additionalInfo");
         if(!findPerson){
            return res.status(404).json({
                success:false,
                message: "user is not register "
            })
         }

         //matching password
         if(await bcrypt.compare(password, findPerson.password)){
            const payload ={
                email : findPerson.email,
                id : findPerson._id,
                role: findPerson.accountType,
    
             }
             const token =  jwt.sign(payload, process.env.SECRET_KEY,{
                expiresIn: "5hr",
             })
    
             findPerson = findPerson.toObject();
             findPerson.token=token;
             findPerson.password = undefined;
             //coocki creation
             const option={
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
              }
    
              return res.cookie("shuvaCookie", token, option).status(200).json({
                success: true,
                message:"login successfully",
                data:findPerson,
                token: token
              })
            }      
          else{
            return res.status(404).json({
               success:false,
               message:" password does't match try again"
             })
           }
    }
    catch(error){
        console.log("error in login section");
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message,
            message:"login fail please try again"
        })

    }
}

//password change