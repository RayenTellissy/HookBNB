const mongoose=require("mongoose")

const uri="mongodb+srv://rayen:YTaNUZnFjLD9U8BJ@fetcher.l7oioju.mongodb.net/HookBNB"

const connectDB=async ()=>{
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB.")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB