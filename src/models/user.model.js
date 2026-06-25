import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    FullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    DOB:{
        type: String,
        required: true,
    },
    photo:{
        url:{
            type: String,
        },
        publicid:{
            type: String,
        },   
    },
    password:{
        type: String,
        required: true,
    },
}, 
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", UserSchema);

export default User;