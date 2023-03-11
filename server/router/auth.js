const express = require("express")
const router = express.Router()

const User = require("../DataBase/userSchema")
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
            res.status(201).json({message:"sucsessfull"})
        }   

    }catch(err){
        console.log(err)
    } 

})

router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body

        if(!email || !password){
            res.status(400).json({error:"email or password is require"})
        }

        const userLogin = await User.findOne({email:email})

        if(!userLogin){
            res.status(400).json({error:"user not found"})
        }
        else{
            if(password== userLogin.password){
                res.status(200).json({message:"user login succesfully"})
            }
            else{
                res.status(400).json({message:"invalid password"})
            }
        }

    }catch(err){console.log(err)}
})

module.exports = router