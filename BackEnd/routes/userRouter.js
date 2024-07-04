import express from 'express';

import {registerUserController , loginUserController} from "../controllers/userController.js";

export const userLoginRouter = express.Router();

userLoginRouter.post('/register', registerUserController);

userLoginRouter.post('/login', loginUserController);

