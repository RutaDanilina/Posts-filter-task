const express = require('express')
const router = express.Router()

const controller = require('../Controllers/mainController')

router.post('/addPost', controller.addPost)
router.post("/find", controller.findPost)
router.get("/delete/:id", controller.deletePost)
router.post("/update", controller.update)




module.exports = router

