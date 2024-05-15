const express = require("express")
const router = express.Router()
const oneController = require("../controllers/oneController.js")

router.get("/one",oneController.one)

module.exports = router
