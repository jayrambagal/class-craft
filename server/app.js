const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
app.use(cookieParser())
app.use(express.json())

app.use(require("./router/auth"))

port  = process.env.PORT || 5002

const path = process.env.DB_PATH


mongoose.connect(path)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(port,async ()=>{
  console.log(`Your port is ${port}`)
});