const express = require('express');
require("dotenv").config();
const connectDB = require("./config/db")

const app = express();
app.use(express.json());

const userRoutes = require("./routes/authRoutes");
const userTodo = require("./routes/todoRoutes")

app.use("/api/auth",userRoutes)
app.use("/api/todo",userTodo);

app.get("/",(req,res)=>{
    res.send("Hello Clients this from server side");
})

connectDB();

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`Server is successfully running in port ${PORT}`)
})