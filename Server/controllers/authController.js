const userModel = require("../models/user")
const bcrypt = require('bcryptjs')

exports.register = async(req,res)=>{
   const {name,email,password} = req.body;
   if(!name || !email || !password)
   {
      return res.status(400).json({
        message :"All fields are required"
      });
   }
   const existingUser = await userModel.findOne({email})
   if(existingUser){
      return res.status(400).json({
        message : "User already exits"
      })
   }
   const hashedpassword = await bcrypt.hash(password,10);
   const user = await userModel.create({
      name,
      email,
      password : hashedpassword
   })
   return res.status(201).json({
      message : "user registered successfully",
      user
   })
}
