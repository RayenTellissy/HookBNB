const express=require("express")
const houseRoute=express.Router()

const { getAll, add, find, edit, remove } = require("../controllers/house")

houseRoute.get("/getAll", getAll)
houseRoute.get("/find/:id", find)

houseRoute.post("/sell", add)

houseRoute.put("/edit/:id",edit)

houseRoute.delete("/delete/:id",remove)


module.exports=houseRoute