import mongoose from "mongoose";
import { serviceModel } from "../models/services.js";
import { userLogins } from "../models/UserLogin.js";


//adding a new Service 
export const addService = async (req, res) => {
    try {
        
        const { bikeName, email, expectedDate, service, id } = req.body;
        
        // validating the required data
        if (!bikeName || !email || !expectedDate || !service) {
            return res.status(400).send({
                success: false,
                message: "Do provide all details",
            })
        }

        const existingUser = await userLogins.findById(id);

        // checking existing user
        if (!existingUser) {
            return res.status(400).send({
                success: false,
                message: "User does not exist",
            })
        }

        const newService = new serviceModel({ bikeName , service, "status": "not started yet", expectedDate,email, id })
        const session = await mongoose.startSession();
        session.startTransaction();
        await newService.save({ session });
        existingUser.service.push(newService);
        await existingUser.save({ session });
        await session.commitTransaction();
        await newService.save();

        return res.status(200).send({
            success: true,
            message: "Service added successfully",
            newService,
        })

    } catch (err) {
        console.log(err);
        console.log(req.body);
        return res.status(500).send({
            message: "Error adding service",
            success: false,
            err,
        }
        )
    }
}

// showing history of orders for owner
export const showServiceToOwner = async (req, res) => {
    try {


        const serv = await serviceModel.find({});
        return res.status(200).send({
            success: true,
            serviceCount: serv.length,
            serv
        })

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error while getting  services list",
            err,
        })
    }
}


// getting particular user services

export const userService = async (req, res) => {
    try{

        const userServices  = await userLogins.findById(req.params.id).populate("service")

        if(!userServices){
            return res.status(404).send({
                success: false,
                message: "no user services found",
            })
        }

        return res.status(200).send({
            success: true,
            message: "user services",
            userServices,
        })

    }catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error while getting user services",
            err,
        })
    }
}

// getting particular user service history

export const history = async (req,res) => {
    try{
        const userHistory = await userLogins.findById(req.params.id).populate({path:"service",match: {status : {$eq:"completed"}}})

        if(!userHistory){
            return res.status(400).send({
                success: false,
                message: "User not found",
            })
        }

        return res.status(200).send({
            success: true,
            message: "User service history",
            userHistory,
        });
    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error white getting user services",
            err, 
        })
    }
}

// show particular sevice

export const particularServices = async (req,res) => {
    try{

        const service = await serviceModel.findById(req.params.id);

        if(!service){
            return res.status(404).send({
                success: false,
                message: "Enter all fields",
            })
        }

        return res.status(200).send({
            success: true,
            message: "Particular service details",
            service,
        })

    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error loading particular services",
            err, 
        });
    }
}

// edit particular user status
export const editUserStatus = async (req, res) => {
    try{

        const id = req.params.id;

        const result = await serviceModel.findByIdAndUpdate(id,{"status":"completed"});

        return res.status(200).send({
            success: true,
            message: "Edited user status",
            result,
        })

    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error editing user status",
            err, 
        })
    }
}