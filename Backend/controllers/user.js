const users=require("../models/user")

module.exports={
  getAll: (req,res)=>{
    users.find().then(users=>res.send(users))
  },

  getOne: (req,res)=>{
    const user=req.query.user
    const password=req.query.password
    users.findOne({user: user, password: password}).then(user=>res.send(user))
  },
  
  add: (req,res)=>{
    const newUser={
      name: req.body.name,
      balance: 0,
      user: req.body.user,
      password: req.body.password
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