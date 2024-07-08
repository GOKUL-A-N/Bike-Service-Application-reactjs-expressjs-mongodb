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
            err,
        });
    }
}

// logging in a user
export const loginUserController = async (req,res) => {
    try{
        const {email,mobile,password} = req.body;

        // validating the inputs
        if(!email || !mobile || !password){
            return res.status(400).send({
                success: false,
                message: "Please enter all your details"
            });
        }

        const user = await userLogins.findOne({email});

        if(!user){
            return res.status(400).send({
                success: false,
                message: "User not found",
            });
        }

        // checking mobile and password
        const isMatch = await bcrypt.compare(password, user.password);
        if(user.mobile != mobile && isMatch){
            return res.status(401).send({
                success: false,
                message: "Mobile or password incorrect",
            })
        }

        return res.status(200).send({
            success:true,
            message: "Login successful",
            user,
        });

    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: " Error in register call back",
            err,
        })
    }
}

