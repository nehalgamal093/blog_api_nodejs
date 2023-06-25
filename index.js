import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()
import { dbConnect } from './database/dbConnection.js';
import userRouter from './src/modules/user/user.router.js';
import blogRouter from './src/modules/blog/blog.router.js';
const app = express();

const port = 3000;
app.use(express.json())
dbConnect();
app.use('/users',userRouter)
app.use('/blogs',blogRouter)
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('Connected Successfully')
})