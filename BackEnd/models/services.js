import mongoose from "mongoose";

const servicesSchema = mongoose.Schema(
    {
        service:{
            type: 'String',
            required : [true,"service is required"],
        },
        status:{
            type: 'String',
            required: true,
        },
        expectedDate:{
            type: 'String',
            required: true,
        },
        id:{
            type: mongoose.Types.ObjectId,
            ref:"userLogin",
            required : [true,"user is required"],
        },
    },
    {
        timeStamps: true,
    }
)

export const serviceModel = mongoose.model('Service', servicesSchema);