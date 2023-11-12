const RestaurentModel = require("../model/restaurentModel.js")
const ErrorHandler = require("../util/errorHandler.js")


const createRestaurent = async(req , res , next)=>{
    try {
        const restaurent = await RestaurentModel.create(req.body)
        return res.status(201).json({
            success : true,
            message : "Restaurent Created Succeesufully",
            restaurent
        })

    } catch (error) {
        return next(new ErrorHandler(error.message , 500))
    }
}

const getAllRestaurent = async(req , res , next)=>{
    try {

        const restaurent = await RestaurentModel.find()

        return res.status(200).json({
            success : true,
            message : "Restaurent Send Successufully",
            restaurent
        })
    } catch (error) {
        return new ErrorHandler(error.message , 500)
    }
}

module.exports = {getAllRestaurent , createRestaurent}