import mongoose from "mongoose";
const connectionToMongoDB=async ()=>{
    const res=mongoose.connect("mongodb://localhost:27017/todo-app");
    res && console.log("Connected to Mongodb");
};
export default connectionToMongoDB