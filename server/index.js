
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/Routes.js';
import db from './db/db.js';
const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use('/', Routes);


app.listen(5000, () => {
    console.log('server start at port 5000');
});

db();
