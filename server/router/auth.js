const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()
const jwt = require("jsonwebtoken")
require('dotenv').config()
require("../app");
const User = require("../DataBase/userSchema")
const Authenticate = require("../Middleware/Authentication")
require("cookie-parser")


router.post("/register",async(req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(422).json({message:"email or password are missing"})
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist){
            res.status(422).json({error:"user is alredy exists"})
        }
        else{
            const user = new User({email,password})
            await user.save()
            res.status(200).json({message:"sucsessfull"})
        }   

    }catch(err){
        console.log(err)
    } 

})

router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body

        if(!email || !password){
            res.status(400).json({error:"email and password booth are require"})
        }

        const userLogin = await User.findOne({email:email})

        if(!userLogin){
            res.status(400).json({error:"invalid password"})   
        }
        else{
            
            const isMatch = await bcrypt.compare(password,userLogin.password);

            // adding jwt token
            const token = jwt.sign(
                { user_id: User._id, email },
                process.env.private_key,
                {
                  expiresIn: "2h",
                }
              );
              // save user token
              User.token = token;
        
            // store jwt token in cookie 
            res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!isMatch){
                console.log("we are in not ismatch")
                res.status(400).json({message:"invalid password"})
            }
            else{
                res.status(200).json({message:"user login succesfully"})
            }
        }

    }catch(err){
        console.log("error in signin auth")
        console.log(err)
    }
})

router.get("/home",Authenticate,(req,res)=>{
    res.status(200).send("Welcome 🙌 ");
})

router.get("/logout",(req,res)=>{
    console.log("we are in logout")
    res.clearCookie("jwttoken",{path:"/"})
    res.status(200).send("user logout")
})

module.exports = router

