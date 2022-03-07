import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/usercontrollers.js';
import login from '../../users/middlewares/login.middlewares.js';
// import messageValidator from '../middlewares/message.middleware.js';


const router = express.Router();

// router.get('/', homepage);

router.get('/users', getUsers);



router.post('/users', login, createUser);

router.get('/users/:id', getUser);

router.post('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);


export {router as default}