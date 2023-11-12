const express = require("express")
const app = express()
const cors = require("cors")
const errorMiddleware = require("./middleware/error.js")

app.use(express.json())
app.use(cors())

//Import Routes
const restaurentRoutes = require("./routes/restaurentRoutes.js")
app.use("/api/v1" , restaurentRoutes)

app.use(errorMiddleware)

module.exports = app