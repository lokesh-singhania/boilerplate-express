var express = require('express');
var app = express();

const loggerMiddleware=(req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
}
app.use(loggerMiddleware);
app.get("/",(req,res)=>{
    // res.send("Hello Express")
    res.sendFile(__dirname+"/views/index.html")
})
app.use('/public',express.static(__dirname+"/public"))
app.get('/now',(req,res,next)=>{
    req.time=new Date().toString();
    next()
},(req,res)=>{
    res.json({time:req.time})
})


app.get("/json",(req,res)=>{
    let message = "Hello json";
    if(process.env.MESSAGE_STYLE=="uppercase"){
        message=message.toUpperCase();
    }
    res.json({message})
})

app.get('/:word/echo',(req,res)=>{
    res.json({echo: req.params.word});
})
console.log("Hello World")




































 module.exports = app;
