const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        firstName :{
            type: 'string',
            required: true,
            trim: true,
        },
        lastName:{
            type: 'string',
            required: true,
            trim: true,
        },
        email:{
            type: 'string',
            required: true,
            trim: true,
        },
        password:{
            type: 'string',
            required: true,
        },
        accountType:{
            type: 'string',
            enum:["Student","Admin","Instractor"]
        },
        additionalInfo:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile"
        },
        courses:
           [ {
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Course"
             }
        ],
        image:{
            type: "string",
            requiered:true,

        },
        //add on active and aprove key
        active: {
			type: Boolean,
			default: true,
		},
		approved: {
			type: Boolean,
			default: true,
		},
        token:{
            type: "string",
        },
        resetPasswordExpiry:{
            type: Date,
        },
        coureseProgress:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "CourseProgress"
            }
        ],
},
// Add timestamps for when the document is created and last modified
{ timestamps: true }
)

module.exports = mongoose.model("User",userSchema);