// const mongoose = require('mongoose')
import mongoose, { Mongoose } from "mongoose";

const userLoginSchema = mongoose.Schema(
    {
        email: {
            type: 'String',
            required: true,
            unique: true,
        },
        mobile:{
            type: 'Number',
            required: true,
        },
        password:{
            type: 'String',
            required: true,
        },
        service: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "servicesSchema",
            }
        ],  
    },
    {
        timestamps: true,
    }
)

export const userLogins = mongoose.model('userLogin',userLoginSchema);