// const mongoose = require('mongoose')

import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or nagative number']
    },
    date: {
        type: "string",
        format:"date",
        required:"true",
        // default: Date.now
    }
})

const Transaction = mongoose.model('transaction', TransactionSchema)
export default Transaction;