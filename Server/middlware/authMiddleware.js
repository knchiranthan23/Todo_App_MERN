const jwt = require("jsonwebtoken")

module.exports = async(req,res,next)=>{
   const authHeader = req.headers.authorization;
   if(!authHeader)
   {
      return res.status(400).json({
        message : "No token provided"
      })
   }
   const token = authHeader.split(" ")[1];
   console.log(token);
   next();
}