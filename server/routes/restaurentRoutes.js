const express = require("express")
const router = express.Router()
const {getAllRestaurent , createRestaurent} = require("../controller/restaurentController.js")


router.route("/getAllRestaurent").get(getAllRestaurent)
router.route("/createRestaurent").post(createRestaurent)

module.exports = router
