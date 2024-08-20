import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import {userLoginRouter}  from './routes/userRouter.js';
import { serviceRouter } from './routes/serviceRouter.js';
import { ownerLoginRouter } from './routes/ownerRouter.js';
import cors from "cors";

const app = express();

// declared for json data format
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

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
    .connect(process.env.MongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(port,() => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })