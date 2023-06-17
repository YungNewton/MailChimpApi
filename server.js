const express = require('express');
const app = express();
const port = 8080;

app.get("/",(req, res)=>{
    res.send("Server up and running");
})

app.listen(port, ()=>{
    console.log("server running on port 3000");
})