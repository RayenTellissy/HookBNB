const mongoose=require("mongoose")

const houses=new mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    image: String
})

const houseModel=mongoose.model("houses",houses)

module.exports=houseModel