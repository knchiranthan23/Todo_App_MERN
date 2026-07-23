const express = require('express')
const router = express.Router();
const protect = require("../middlware/authMiddleware")
const Todo = require("../controllers/todoController")

router.post("/",protect,Todo.createTodo)
module.exports=router;
