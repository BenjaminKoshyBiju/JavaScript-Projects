import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    isCompleted:{
        type:String
    }
  },
  { timestamps: true }
);
const todoModel=mongoose.model("todos",schema)
export default todoModel;
