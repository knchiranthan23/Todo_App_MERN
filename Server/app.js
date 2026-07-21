const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello Clients this from server side");
})
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is successfully running in port ${PORT}`)
})