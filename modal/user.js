import mongoose from "mongoose";

const schema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

export const User = mongoose.model("Users",schema)