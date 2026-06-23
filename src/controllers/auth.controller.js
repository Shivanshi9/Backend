//used fo creating functions
import User from "../models/user.model.js";

export const Register_user = async (req,res) => {
    try {
        const {FullName,email,password,phone,gender,DOB} = req.body;

        if(!FullName||!email||!password||!phone||!gender||!DOB){
            res.status(400).json({message: "All fields required"});
            return;
        }

        const existinguser = await User.findOne({email});
        if(existinguser)
        {
             res.status(409).json({message: "Email already registered"});
            return;
        }

        //create new user and complete registration
    } catch (error) {
        
    }
}

export const Logout_user = (req,res) => {
    res.json({message : "Logout Successfully from controller"});
}

export const Login_user = (req,res) => {
    res.json({message : "Login Successfully from controller"});
}