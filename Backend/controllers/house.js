const houses=require("../models/house")
const users=require("../models/user")

module.exports={
    getAll: (req,res)=>{
        houses.find().then(houses=>res.send(houses))
    },

    find: (req,res)=>{
        const id=req.params.id
        houses.findOne({_id: id}).then(house=>res.send(house))
    },

    add: (req,res)=>{
        const newHouse={
            title: req.body.title,
            location: req.body.location,
            price: req.body.price,
            image: req.body.image
        }
        houses.create(newHouse)
        .then(house=>users.findOneAndUpdate({_id: req.body.ownerid},{$push: {rents: house}}))
        .then(house=>res.send(house))
    },

    edit: (req,res)=>{
        const { id }=req.params
        const editedHouse={
            title: req.body.title,
            location: req.body.location,
            price: req.body.price,
            image: req.body.image
        }
        houses.findByIdAndUpdate(id,editedHouse).then(house=>res.send(house))
    },

    remove: (req,res)=>{
        const { id }=req.params
        houses.findByIdAndDelete(id).then(house=>res.send(house))
    },

    search: (req,res)=>{
        const query=req.query.query
        const toSearch={
            $or: [
                {title:{$regex:new RegExp(query, 'i')}},
                {location:{$regex:new RegExp(query, 'i')}}
            ]
        }        
        houses.find(toSearch).then(houses=>res.send(houses))
    }
}