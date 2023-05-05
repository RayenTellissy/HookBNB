const mongoose=require("mongoose")

const users={
  name: String,
  balance: Number,
  phone: Number,
  user: String,
  password: String,
  rents: Array,
  ownerid: String
}

const userModel=mongoose.model("users",users)

module.exports=userModel