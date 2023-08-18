const dotenv = require('dotenv');
const mongoose = require('mongoose')
const express = require('express')
const cors  = require('cors')
const app= express();



dotenv.config({path : './.env'})
const User= require('./models/userSchema')
 


app.use(cors())
app.use(express.json())
 
app.use(require('./router/auth'))
const port= process.env.PORT;


//middleware

const middleware= (req,res,next)=>{
    console.log(`middleware`)
    next();
}


app.get("/ss",(req,res)=>{
    res.cookie("jwttt",'kte');
    res.json("kkk")
})







app.get("/",(req,res)=>{
    res.send("heee")
})

app.get("/contact",middleware,(req,res)=>{
    res.send("contact")
})
app.get("/about",(req,res)=>{
    res.send("about")
})

app.get("*",(req,res)=>{
    res.send(`cannot find ${req.params[0]}`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})