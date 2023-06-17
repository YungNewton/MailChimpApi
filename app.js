const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('styles.css'));

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/sign_up.html");
})

app.listen(port, ()=>{
    console.log("server running on port 3000");
})