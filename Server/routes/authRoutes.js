const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController")
const protect = require("../middlware/authMiddleware")

router.post("/register",authController.register)
router.post("/login",authController.login)
// router.get("/profile",protect,(req,res)=>{
//   console.log(req.user._id)
//   res.send("Middleware is working")
// })

module.exports = router;