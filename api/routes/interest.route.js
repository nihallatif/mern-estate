import express from 'express';
import { createInterest, getInterests, createUserInterest, getUserInterests} from '../controllers/interest.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createInterest);
router.post('/createuserinterest', verifyToken, createUserInterest);
router.get('/get', getInterests);
router.get('/getuserinterests/:id', verifyToken, getUserInterests)

export default router;