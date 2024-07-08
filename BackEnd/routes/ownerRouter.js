import express from "express";

import { ownerLoginController , registerOwnerController } from "../controllers/ownerController.js";

export const ownerLoginRouter = express.Router();

// owner registration route
ownerLoginRouter.post('/register', registerOwnerController);

// owner login route
ownerLoginRouter.post('/login', ownerLoginController)