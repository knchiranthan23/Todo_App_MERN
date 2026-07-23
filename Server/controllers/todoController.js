const userTodo = require("../models/todo");
exports.createTodo = async(req,res)=>{
    const{title} = req.body;
    try{
        const task = await userTodo.create({
        title,
        completed:false,
        user:req.user._id
      })
      return res.status(201).json({
        message:"Task is written successfully",
        task
      })
    }
    catch(error)
    {
        return res.status(500).json({
            message : "Internal server error"
        })
    }
}