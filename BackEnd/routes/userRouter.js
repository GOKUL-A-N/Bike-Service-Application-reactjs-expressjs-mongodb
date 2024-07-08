import express from 'express';

import {registerUserController , loginUserController} from "../controllers/userController.js";

export const userLoginRouter = express.Router();


// route for user registration
userLoginRouter.post('/register', registerUserController);

// route for user login
userLoginRouter.post('/login', loginUserController);

