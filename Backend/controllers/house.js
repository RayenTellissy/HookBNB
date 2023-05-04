const houses=require("../models/house")

module.exports={
    getAll: (req,res)=>{
        houses.find().then(houses=>res.send(houses))
    },
    add: (req,res)=>{
        const newHouse={
            title: req.body.title,
            location: req.body.location,
            price: req.body.price,
            image: req.body.image
        }
        houses.create(newHouse).then(house=>res.send(house))
    }
}