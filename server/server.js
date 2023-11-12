const app = require("./app.js")
const connection = require("./config/database.js")
require("dotenv").config({path:"../.env"})

//Handled UncaughtException Error
process.on("uncaughtException" , (error)=>{
    console.log(`Error is ${error.message}`)
    console.log(`Shutting down due to Uncaught Exception Error`)

    process.exit(1)
})

//Database Connectivity
connection()

const server = app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`listening on Port ${process.env.PORT || 3000}`)
})

// Handled unhandled Promised Rejection
process.on("unhandledRejection" , (err)=>{
    console.log(`Error is ${err.message}`)
    console.log(`Shutting Down due to Unhandled Promised Rejection`)

    server.close(()=>{
        process.exit()
    })
})
