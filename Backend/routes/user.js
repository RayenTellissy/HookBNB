const express=require("express")
const userRoute=express.Router()

const { getAll } = require("../controllers/user")

userRoute.get("/getAll", getAll)

module.exports=userRoute