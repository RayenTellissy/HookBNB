const express=require("express")
const { getAll, add } = require("../controllers/house")
const houseRoute=express.Router()

houseRoute.get("/getAll", getAll)

houseRoute.post("/sell", add)



module.exports=houseRoute