import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";

const app = express();

app.use("/auth" , AuthRouter);
app.use("/public" , PublicRouter);

//routes default api
app.get("/",(req,res)=>{
    console.log("Get API hits");
    res.json({message: "Welcome to my first backend project"});
})



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started on port: ",port);
    
})