const express = require('express')
const router = express.Router();
const protect = require("../middlware/authMiddleware")
const Todo = require("../controllers/todoController")

router.post("/",protect,Todo.createTodo)
router.get("/",protect,Todo.getTodo)
router.put("/update/:id",protect,Todo.updateTodo)
module.exports=router;
