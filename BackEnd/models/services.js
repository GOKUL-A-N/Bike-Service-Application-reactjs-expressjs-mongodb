import mongoose from "mongoose";

const servicesSchema = mongoose.Schema(
    {
        service:{
            type: 'String',
            required : true,
        },
        email:{
            type: 'String',
            required : true,
        },
        status:{
            type: 'String',
            required: true,
        }
    },
    {
        timeStamps: true,
    }
)

export const serviceModel = mongoose.model('Service', servicesSchema);