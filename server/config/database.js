const mongoose = require("mongoose")

const connection = ()=>{
    mongoose.connect("mongodb://localhost:27017/swiggy" || process.env.Mongo_Url)
    .then((data)=>console.log(`mongoDB is connected On ${data.connection.host}`))
    .catch((err)=>console.log(`mongoDB is error is ${err.message}`))
}

module.exports = connection