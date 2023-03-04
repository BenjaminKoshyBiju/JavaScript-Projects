import todoModel from "../models/todoModel.js";
class todoController {
  static getalltodos = async (req, res) => {
    try {
      const fetchalltodos = await todoModel.find({});
      return res.status(200).json(fetchalltodos);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static addNewtodo = async (req, res) => {
    const { title, isCompleted } = req.body;
    try {
      if (title && isCompleted) {
        const addtodo = new todoModel({
          title,
          isCompleted,
        });
        const savedtodo = await addtodo.save();
        return res.status(200).json({ message: "Success" });
      } else {
        return res.status(400).json({ message: "Fill both fields!" });
      }
    } catch (error) {}
    return res.status(400).json({ message: error.message });
  };

  static getnewtodo= async(req,res)=>{
    const {id}=req.params;
    try{
        if(id)
        {
            const fetch1data=await todoModel.findById(id);
            return res.status(200).json({fetch1data });
        }
        else{
            return res.status(400).json({message: "invalid id" });
        }

    }
    catch(error)
    {
        return res.status(400).json({ message: error.message });
    }
  }
}
export default todoController;
