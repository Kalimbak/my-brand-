import express from 'express';
import mongoose from 'mongoose';
import router from './src/blogs/routes/blogroutes.js';
import userRouter from './src/blogs/routes/usersroutes.js';
import messageRouter from './src/blogs/routes/messagesrouter.js';
import dotenv from 'dotenv';
// import validator from 'validator';

dotenv.config()



mongoose.connect('mongodb+srv://KKalimba:Kales12002.@cluster0.bd45s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
console.log("connected to DB");

const app = express();
app.use(express.json());
app.use(router);
app.use(userRouter)
app.use(messageRouter)
// app.use(validator)

app.listen(3000, () => console.log('server running'));