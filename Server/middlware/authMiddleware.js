const jwt = require("jsonwebtoken")

module.exports = async(req,res,next)=>{
   console.log(req.headers)
   next();
}