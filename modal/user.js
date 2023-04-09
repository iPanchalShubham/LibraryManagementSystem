import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    books:[{
        type:Schema.Types.ObjectId,
        ref:"Books"
    }

    ]
})

export const User = mongoose.model("Users",schema)