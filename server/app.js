const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(require("./router/auth"))
const path ="mongodb+srv://Jayram:jayram1234@cluster0.dmbhtsw.mongodb.net/ClassCarft?retryWrites=true&w=majority"

app.get("/",(req,res)=>{
    res.send("hellp")

})

mongoose.connect(path)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(5000,async ()=>{
    console.log("Connected to server :)")
});