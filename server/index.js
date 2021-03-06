import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";

const app=express();
dotenv.config();


app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('Hello Users to my Memories project');
})

const PORT=process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=> console.log(`Server running on PORT: ${PORT}`)))
    .catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify',false);


