// const mongoose = require('mongoose')
import mongoose from "mongoose";

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
        service: {
            type: 'String',
        },
    },
    {
        timestamps: true,
    }
)

export const userLogins = mongoose.model('userLogin',userLoginSchema);