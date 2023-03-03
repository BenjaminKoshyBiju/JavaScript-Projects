import express from "express";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";
import connectionToMongoDB from "./config/database.js";
const app=express();
const port=9000;
app.use(cors())
app.use(express.json()) 
connectionToMongoDB()
app.get("/",(req,res)=>{
    res.send("API Working");
});
app.use("/api/v1",todoRoute);
app.listen(port,()=>{
    console.log('server created at port http://localhost:9000')
});
