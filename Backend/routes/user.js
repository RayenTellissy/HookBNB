const express=require("express")
const userRoute=express.Router()

const { getAll, login, add, edit } = require("../controllers/user")

userRoute.get("/getAll", getAll)

userRoute.post("/add", add)
userRoute.post("/login", login)

userRoute.put("/edit/:id", edit)

module.exports=userRoute