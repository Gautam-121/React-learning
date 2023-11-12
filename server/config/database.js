const mongoose = require("mongoose")

const connection = ()=>{
    mongoose.connect(process.env.Mongo_Url)
    .then((data)=>console.log(`mongoDB is connected On ${data.connection.host}`))
    .catch((err)=>console.log(err.message))
}

module.exports = connection