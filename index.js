import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    console.log("Get API hits");
    res.json({message: "Welcome to my first backend project"});
})

app.post("/login",(req,res)=>{
    res.json({message: "Login Successfully"});
})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started on port: ",port);
    
})