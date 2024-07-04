import express from 'express';

import { addService , showServiceToOwner } from '../controllers/serviceController.js';

export const serviceRouter = express.Router();

serviceRouter.post('/addServices',addService);

serviceRouter.get('/allService',showServiceToOwner);