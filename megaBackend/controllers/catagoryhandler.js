const Catagory = require("../models/catagory")

exports.catagoryCreation = async (req,res)=>{
    try{
        const{name, description} = req.body;
        if(!name || !description){
            return res.status(404).json({
                success: false,
                message: "all fill to be field"
            })
        }

        const catagoryEntryinDb = await Catagory.create({
            name,description
        })
        return res.status(200).json({
            success: true,
            message:" tag creation is successful",
            data:catagoryEntryinDb
        })

    }
    catch(error){
        console.log("error in tag creation ", error);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
//fetch all tags

exports.showAllCatagory = async (req,res)=>{
    try{
        const allCatagory = await Catagory.find({},{name:true, description:true});
        return res.status(200).json({
            success:false,
            message:"alltags fetched",
            allCatagory,
        })
    }
    catch(err){
        console.log("error in tag fetch ", err);
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}