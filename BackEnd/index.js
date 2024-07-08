import express from 'express';
import mongoose from 'mongoose';
import { PORT,MongoDBURL } from './config.js';
import {userLoginRouter}  from './routes/userRouter.js';
import { serviceRouter } from './routes/serviceRouter.js';
import { ownerLoginRouter } from './routes/ownerRouter.js';

const app = express();

// declared for json data format
app.use(express.json());

// declared for verifying the working of backend
app.get('/', (req, res) => {
    res.send("Welcome Back Chief!")
})


// routes for user login
app.use('/user',userLoginRouter);


// routes for services
app.use('/service',serviceRouter);


// routes for owner login
app.use('/owner',ownerLoginRouter);


// connecting server to database and porting on localhost
mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })