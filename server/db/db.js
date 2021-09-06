// const mongoose = require('mongoose');
import mongoose from 'mongoose';


const db = () => {

    
    const URL = "mongodb+srv://rohitvish123:Rohit123@exptrack.aixly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open!')
    }).catch(err => {
        console.log('OH NO Mongo connection error!!')
        console.log(err);
    })
    
}

export default db;

