import { ownerLogin } from "../models/ServiceProviderLogin.js";
import bcrypt from "bcrypt";


// creating a new owner
export const registerOwnerController = async ( req,res ) => {
    try{
        const { email , password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                message: "Please enter all details",
                success: false,
            })
        }

        // checking existing owner
        const existingOwner = await ownerLogin.findOne({ email: email});
        if(existingOwner){
            return res.status(400).send({
                success: false,
                message: "Owner already exists",
            })
        }

        const hashPass = await bcrypt.hash(password,10);
        const owner = new ownerLogin({email: email, password:hashPass})
        owner.save();

        return res.status(200).send({
            success: true,
            message: "Owner saved successfully",
            owner,
        })


    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Error registering owner",
            success: false,
            err,
        })
    }
}

// logging in a owner

export const ownerLoginController = async (req,res) => {
    try{

        const {email , password} = req.body;

        if(!email , !password){
            return res.status(400).send({
                success: false,
                message: "Please do enter all details",
            })
        }

        const owner = await ownerLogin.findOne({email})

        if(!owner){
            return res.status(400).send({
                success: false,
                message: "Owner not found",
            })
        }

        const isMatch = await bcrypt.compare(password,owner.password);
        if(!isMatch){
            return res.status(401).send({
                success: false,
                message: "Password incorrect",
            })
        }

        return res.status(200).send({
            success: true,
            message: "Login successful",
            owner,
        })

    }catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error logging in",
        });
    }
}




