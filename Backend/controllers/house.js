const houses=require("../models/house")

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
        houses.create(newHouse).then(house=>res.send(house))
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
    }
}