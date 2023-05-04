const express=require("express")
const cors=require("cors")
const houseRoute = require("../routes/house")
const connectDB = require("../database/connection")
const app=express()

const port=3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB()

app.use("/houses", houseRoute)



app.listen(port,()=>console.log(`server listening on port: ${port}`))