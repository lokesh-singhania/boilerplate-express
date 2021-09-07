var express = require('express');
var bodyParser=require('body-parser')
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
app.use("/name",bodyParser.urlencoded({extended:false}))
app.route("/name").get((req,res)=>{
    const {first,last}=req.query;
    res.json({name:`${first} ${last}`})
}).post((req,res)=>{
    const {first,last}=req.body;
    res.json({name:`${first} ${last}`})
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
