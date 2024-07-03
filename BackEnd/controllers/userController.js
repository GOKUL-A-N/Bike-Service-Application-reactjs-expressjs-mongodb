import {userLogins}  from "../models/UserLogin.js";
import bcrypt from "bcrypt";

// creating new user account
export const registerUserController = async (req,res) => {
    try{
        const {email , mobile , password } = req.body;

        // validating datas
        if(!email || !mobile || !password){
            return res.status(400).send({
                success: false,
                message: "Please enter all details",
            });
        }

        // checking existing user
        const existingUser = await userLogins.findOne({ email});
        if(existingUser){
            return res.status(400).send({
                success: false,
                message: "Email already exists",
            });
        }

        // saving a new user
        const hashPass = await bcrypt.hash(password,10);
        const user = new userLogins({ email: email,mobile:mobile, password: hashPass});
        user.save();

        return res.status(201).send({
            success: true,
            message: "User saved successfully",
            user,
        });

    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Error saving user",
            success: false,
            error,
        });
    }
}

