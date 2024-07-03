import express from 'express';

import {registerUserController} from "../controllers/userController.js";

export const userLoginRouter = express.Router();

userLoginRouter.post('/register', registerUserController);

