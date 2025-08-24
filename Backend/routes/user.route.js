import express from 'express';
import { GetUserData} from '../controller/user.controller.js';
const router = express.Router()

// GET users
router.get('/', GetUserData)
// router.post('/', AddUser)
// router.delete('/:id', DeleteUser)
// router.put('/:id', UpdateUser)

export default router