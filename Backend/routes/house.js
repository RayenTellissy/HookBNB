const express=require("express")
const { getAll, add, find } = require("../controllers/house")
const houseRoute=express.Router()

houseRoute.get("/getAll", getAll)
houseRoute.get("/find/:id", find)

houseRoute.post("/sell", add)



module.exports=houseRoute