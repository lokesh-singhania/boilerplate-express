var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    // res.send("Hello Express")
    res.sendFile(__dirname+"/views/index.html")
})
app.use('/public',express.static(__dirname+"/public"))

app.get("/json",(req,res)=>{
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE=="uppercase"){
        message=message.toUpperCase();
    }
    res.json({message})
})
console.log("Hello World")




































 module.exports = app;
