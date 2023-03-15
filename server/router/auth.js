const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
require('dotenv').config()
require("../app");
const User = require("../DataBase/userSchema")
const Otp = require("../DataBase/optSchema")
const Authenticate = require("../Middleware/Authentication")
require("cookie-parser")


// taking data from req.body and store the data in mongodb Database 
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

//Adding login Authentication through here and creating the jwt tokens for auth 
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

// adding forget email to opts data collections in database

router.post("/sendmail", async(req,res)=>{
    const email = req.body.email
    if(!email){
        res.status(400).json({error:"email are require"})
    }
    try{
        const emailExist = await User.findOne({email:email})

    if(emailExist){
        const OtpCode = Math.floor((Math.random()*10000+1))
        const OtpData = new Otp({
            email,
            otp:OtpCode,
            expireIn: new Date().getTime() + 300*1000
        })
        await OtpData.save()

        try{
            const mailTransporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:"jayram.bagal.it@ghrcem.raisoni.net",
                    pass:"jayram@1234"
                }
            })
            const details = {
                from:"jayram.bagal.it@ghrcem.raisoni.net",
                to:email,
                subject:`Your ClassCarft reset password OTP is ${OtpCode}`,
                text:`Your one time password for resetting the password is ${OtpCode}`
            }
            
            mailTransporter.sendMail(details,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("mail send successfully");
                }
            })
        }catch(err){
            console.log("error in sending emale to email");
        }
        

        res.status(200).json({success:"send opt done"})
    }
    else{
        res.status(400).json({error:"email does not exists"})
    }
    }catch(err){
        console.log(err)
        res.send(400)
    }
    
    
})

// validating the otp and changeing the password with new one

router.post('/changepass',async(req,res)=>{
    const data = await Otp.findOne({email:req.body.email , otp:req.body.Otp})

    if (data){
        const currentTime = new Date().getTime();
        const diff  = data.expireIn - currentTime

        if (diff<0){
            res.status(400).json({message:"otp is expire"})
        }
        else{
            const user = await User.findOne({email:req.body.email})
            user.password = req.body.password
            await user.save()
            res.status(200).json({message:"reset password successfully"})
        }
    }
    else{
        res.status(400).json({error:"invalid otp"})
    }
})

// adding middleware in /home 
router.get("/home",Authenticate,(req,res)=>{
    res.status(200).send("Welcome 🙌 ");
})

// logout
router.get("/logout",(req,res)=>{
    console.log("we are in logout")
    res.clearCookie("jwttoken",{path:"/"})
    res.status(200).send("user logout")
})

module.exports = router

