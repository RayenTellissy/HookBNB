const express=require("express")
const userRoute=express.Router()

const { getAll, getOne,  add, edit } = require("../controllers/user")

userRoute.get("/getAll", getAll)
userRoute.get("/getOne", getOne)

userRoute.post("/add", add)

userRoute.put("/edit/:id", edit)

module.exports=userRoute