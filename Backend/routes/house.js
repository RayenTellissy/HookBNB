const express=require("express")
const { getAll, add, find, edit, remove } = require("../controllers/house")
const houseRoute=express.Router()

houseRoute.get("/getAll", getAll)
houseRoute.get("/find/:id", find)

houseRoute.post("/sell", add)

houseRoute.put("/edit/:id",edit)

houseRoute.delete("/delete/:id",remove)



module.exports=houseRoute