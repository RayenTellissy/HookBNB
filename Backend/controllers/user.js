const users=require("../models/user")
const bcrypt=require("bcrypt")

module.exports={
  getAll: (req,res)=>{
    users.find().then(users=>res.send(users))
  },

  login: (req,res)=>{
    const user=req.body.user
    const password=req.body.password
    users.findOne({user: user}).then(async (user)=>{
      if(user){
        if(await bcrypt.compare(password,user.password)){
          res.send(user)
        }
        else{
          res.send("incorrect password")
        }
      }
      else{
        res.send("cannot find user")
      }
    })
  },
  
  add: async (req,res)=>{
    const password=await bcrypt.hash(req.body.password,10)
    const newUser={
      name: req.body.name,
      balance: 0,
      user: req.body.user,
      password: password
    }
    users.create(newUser).then(user=>res.send(user))
  },

  edit: (req,res)=>{
    const id=req.params.id
    const name=req.body.name
    const user=req.body.user
    const password=req.body.password
    const rents=req.body.rents

    const updatedUser={
      name: name,
      user: user,
      password: password,
      rents: rents
    }
    users.findByIdAndUpdate(id,updatedUser).then(user=>res.send(user))
  }
}