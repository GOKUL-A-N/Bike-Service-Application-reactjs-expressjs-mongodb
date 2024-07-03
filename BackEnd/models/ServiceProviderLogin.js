// const mongoose = require('mongoose')

const ServiceProviderLoginSchema = mongoose.Schema(
    {
        email: {
            type: 'String',
            required: true,
            unique: true,
        },
        mobile:{
            type: 'Integer',
            required: true,
        },
        password:{
            type: 'String',
            required: true,
        },
        service: {
            type: 'String',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const ownerLogin = mongoose.model('ownerLogin',ServiceProviderLoginSchema);

