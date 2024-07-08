import mongoose from "mongoose";

const ServiceProviderLoginSchema = mongoose.Schema(
    {
        email: {
            type: 'String',
            required: true,
            unique: true,
        },
        password:{
            type: 'String',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const ownerLogin = mongoose.model('ownerLogin',ServiceProviderLoginSchema);

