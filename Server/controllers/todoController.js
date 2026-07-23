const userTodo = require("../models/todo");
const { findOne } = require("../models/user");
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

exports.getTodo = async(req,res)=>{
   try{
        const user_tasks =  await userTodo.find({
         user:req.user._id
      })
     return res.status(200).json({
       message:"Users tasks are found",
       user_tasks
     })
  }
  catch(error)
  {
       return res.status(500).json({
            message : "Internal server error"
        })
  }
}   

exports.updateTodo = async(req,res)=>{
    const{title,completed}=req.body
    try{
          const todos = await userTodo.findOne({
         _id:req.params.id,
         user:req.user._id
        })
        if(!todos){
          return res.status(404).json({
            message: "Todo not found"
          })
        }
       todos.title=title;
       todos.completed=completed;
       await todos.save()
       return res.status(200).json({
          message :"Todo updated successfully",
       })
    }
    catch(error)
    {
        return res.status(500).json({
            message : "Internal server error"
        })
    }
}

exports.deleteTodo = async(req,res)=>{
   try{
        const todos = await userTodo.findOne({
        _id : req.params.id,
        user : req.user._id
      })
     if(!todos)
     {
       return res.status(404).json({
          message : "Todo not found"
       })
     }
     await todos.deleteOne()
     return res.status(200).json({
          message :"Todo deleted successfully",
       })
    }
    catch(error)
    {
         return res.status(500).json({
            message : "Internal server error"
        })
    }
}