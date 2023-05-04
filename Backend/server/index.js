const express=require("express")
const cors=require("cors")
const connectDB = require("../database/connection")
const app=express()

const houseRoute = require("../routes/house")
const userRoute=require("../routes/user")

const port=3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB()

app.use("/houses", houseRoute)

app.use("/users", userRoute)



app.listen(port,()=>console.log(`server listening on port: ${port}`))