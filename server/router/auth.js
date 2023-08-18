const express= require('express')
const bcrypt = require('bcryptjs')
const router= express.Router();
const jwt = require('jsonwebtoken')
const initialConn = require('D:/React/MernStack/server/db/conn.js')


// const initialConn= require('../db/conn')
// initialConn();
const User= require('../models/userSchema')

router.get("/",(req,res)=>{
    res.send("ROUTER")
}) 

router.post("/register", async (req,res)=>{
    
    const {name, email, phone ,profession, password, cpassword} =req.body;
const signIn= async()=>{
     try {
        initialConn();
    
     } catch (error) {
        console.log(`arey ${error}`)
     }
}

signIn();


    console.log(`user is ${name}, ${email}, ${phone} ,${profession}, ${password}, ${cpassword} `)

        if(!name|| !email|| !phone || !profession || !password|| !cpassword){
        res.status(404).json({error:"Complete the details"})
        }

    try {

        console.log("inside trying")
        

        const userExist = await User.findOne({email:email});
        console.log("hehe")
        console.log(`dekho ${userExist}`)
        console.log("HOHO")
        if(userExist){
            res.status(422).json("Already exists")
        }else if( password !== cpassword){
            res.status(422).json("password not matching")
        }else{
         
        const userRegister = await User.create({name, email, phone ,profession, password, cpassword});

        if(userRegister){
            res.status(201).json("user created succesfully")
        }else{
            res.status(422).json("failed to register")
        }
        }
        

    }

    catch(err){
        res.status(500).json(err)
    }
}    
)

router.post('/signin',async (req, res)=>{

        let token;
    try {

        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json("fill all fields")
        }

        const usera = await User.findOne({email: email})

        if(usera){

            const isMatch = bcrypt.compare(password, usera.password);

            token = await usera.generateAuthToken();

            res.cookie("jwtoken", token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            })
            
            if(isMatch){
                res.status(200).json("signin success")
            }
            else{
                res.status(400).json("password not matching")
            }
        }else{
            res.status(400).json("NO user found")
        }
        


        
    } catch (error) {
        console.log(error)
    }
})



module.exports = router