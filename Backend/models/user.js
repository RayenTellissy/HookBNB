const mongoose=require("mongoose")

const users={
  name: String,
  balance: Number,
  phone: Number,
  user: String,
  password: String,
  rents: Array
}

const userModel=mongoose.model("users",users)

module.exports=userModel