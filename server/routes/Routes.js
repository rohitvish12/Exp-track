import express from 'express';

import {addTransactions, getTransactions} from '../controllers/Transaction.js';
const router=express.Router();


router.post('/', addTransactions);
router.get('/transaction', getTransactions);

export default router;

