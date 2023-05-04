const users=require("../models/user")

module.exports={
  getAll: (req,res)=>{
    users.find().then(users=>res.send(users))
  }
}