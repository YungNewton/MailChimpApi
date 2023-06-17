const bodyParser = require('body-parser');
const express = require('express');
const https = require('https')
const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/sign_up.html");
})

app.post('/',(req, res)=>{
    var email = req.body.email;
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    res.send("<h2 style ='font-family:Georgia, 'Times New Roman', Times, serif;'> Thank you for signing up "+ firstName +".<h2/>")
    console.log(email+ " "+firstName+ " "+lastName)

})

app.listen(port, ()=>{
    console.log("server running on port "+port);
})
