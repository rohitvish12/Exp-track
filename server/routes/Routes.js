import express from 'express';

// import Transaction from '../modal/Transaction.js'
import {addTransactions, getTransactions} from '../controllers/Transaction.js';
const router=express.Router();


router.post('/', addTransactions);
router.get('/transaction', getTransactions);

export default router;

// async(req, res) => {
//     // res.send(`Hello server from router js`);
//     try {
//         // console.log(req.body);
//         // res.json({massege:req.body});
//         // const Expense = req.body;
//         // console.log(Expense);
//         // const NewTransaction = new Transaction(Expense);
//         // await NewTransaction.save();
//         // res.json({message: 'Your Expenses is saved on mongo!'})
        
//     } catch (error) {
//         console.log(error.message);
//     }