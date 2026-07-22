const userModel = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
       return res.status(400).json({
          message:"All fields should exists"
       })
    }
    const user = await userModel.findOne({email});
    if(!user)
    {
        return res.status(400).json({
            message : "Invalid Credentials"
        })
    }
   const isMatch = await bcrypt.compare(password,user.password)
   if(!isMatch)
   {
     return res.status(400).json({
        message:"wrong password"
     })
   }
   const token = jwt.sign(
     {
        _id:user._id
     },
     process.env.JWT_SECRET,
     {
        expiresIn:"7d"
     });
    return res.status(201).json({
        message : "user successfully login",
        token,
        user
    })
}
