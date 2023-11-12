const mongoose = require("mongoose")

const restaurentSchema = new mongoose.Schema({

    id:{
        type:String,
        required:true,
        unique:true
    },
    cloudinaryImageId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    areaName:{
        type:String,
        required:true
    },
    avgRating:{
        type:Number,
    },
    cuisines:[{type:String}],
    deliveryTime:{
        type:Number,
        required:true
    },
    aggregatedDiscountInfo:{
       header : {
        type : String,
       },
       subHeader:{
        type:String,
       }
    },
},{timestamps:true})

module.exports = mongoose.model("restaurent" , restaurentSchema)