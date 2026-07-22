const jwt = require("jsonwebtoken")

module.exports = async(req,res,next)=>{
   const authHeader = req.headers.authorization;
   if(!authHeader)
   {
      return res.status(400).json({
         message:"No token seen"
      })
   }
   const token = authHeader.split(" ")[1];
     console.log(token)
     console.log(process.env.JWT_SECRET)
   try{
     const decoded = jwt.verify(token,process.env.JWT_SECRET)
     console.log(decoded);
     req.user=decoded
     next();
   }
   catch(error){
     console.log(error)
     return res.status(400).json({
        message:"Token has been corrupted"
     })
   }
}