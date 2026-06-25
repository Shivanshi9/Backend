//used fo creating functions
import User from "../models/user.model.js";

export const Register_user = async (req, res, next) => {
    try {
        const { FullName, email, password, phone, gender, DOB } = req.body;

        if (!FullName || !email || !password || !phone || !gender || !DOB) {
            const error = new Error("All fields required");
            error.statusCode = 409;
            return next(error);
        }

        const existinguser = await User.findOne({ email });
        if (existinguser) {
            const error = new Error("All fields required");
            error.statusCode = 409;
            return next(error);

        }

        const photoUrl = `https://placehold.co/600x400?text=${FullName.charAt(0).toUpperCase()}`;

        const photo = {
            url: photoUrl,
            publicId: null,
        };

        const newUser = await User.create({
            FullName, email, password, phone, gender, DOB, photo,
        })

        res.status(201).json({ message: "user created successfully" });

        //create new user and complete registration
    } catch (error) {
       next();
    }
}

export const Logout_user = (req, res) => {
    res.json({ message: "Logout Successfully from controller" });
}

export const Login_user = (req, res) => {
    res.json({ message: "Login Successfully from controller" });
}