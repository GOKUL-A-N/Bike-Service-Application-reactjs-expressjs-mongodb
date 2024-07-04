import express from 'express';
import mongoose from 'mongoose';
import { PORT,MongoDBURL } from './config.js';
import {userLoginRouter}  from './routes/userRouter.js';
import { serviceRouter } from './routes/serviceRouter.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome Back Chief!")
})

app.use('/user',userLoginRouter);

app.use('/service',serviceRouter);

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