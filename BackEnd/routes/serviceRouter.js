import express from 'express';

import { addService , showServiceToOwner , userService , history , particularServices , editUserStatus , editUserReady} from '../controllers/serviceController.js';

export const serviceRouter = express.Router();


// route for adding a new service
serviceRouter.post('/addServices',addService);

// route for getting all services for the owner
serviceRouter.get('/allService',showServiceToOwner);

// route for getting a particular users service list
serviceRouter.get('/userService/:id',userService);

// route for getting a particular users history
serviceRouter.get('/history/:id',history);

// route for getting a particular service
serviceRouter.get('/getParticularService/:id',particularServices);

// route for edit user service status
serviceRouter.put('/editUserStatus/:id',editUserStatus);

serviceRouter.put('/editUserReady/:id',editUserReady);