import mongoose from "mongoose";
import {serviceModel} from "../models/services.js";
import { userLogins } from "../models/UserLogin.js";


//adding a new Service 
export const addService = async (req,res) => {
    try{

        const {service , email} = req.body;

        if(!service || !email){
            return res.status(400).send({
                success: false,
                message: "Please enter all details",
            });
        }

       

        const serv = new serviceModel({service: service,email: email,status: "not started yet"});
        await serv.save();

        return res.status(200).send({
            success: true,
            message: "Service added successfully",
            serv,
        })

    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Error adding service",
            success: false,
            err,
        }
        )
    }
}

// showing history of orders for owner
export const showServiceToOwner = async (req,res) => {
    try{

        
        const serv = await serviceModel.find({});
        return res.status(200).send({
            success: true,
            serviceCount: serv.length,
            serv
        })

    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error while getting user services",
            err,
        })
    }
}

