const express = require('express')
const router = express.Router()

// Middlewares
const upload = require('../middlewares/upload')

const competitionsController = require('../controllers/competitions')

router.post('/graduates', upload, competitionsController.graduates)
// router.post('/undergraduates', competitionsController.undergraduates)

// router.post('/schools', competitionsController.schools)
// router.post('/techschools', competitionsController.techschools)

// router.post('/micromouse', competitionsController.micromouse)
// router.post('/arc6', competitionsController.arc6)
// router.post('/spaghetti', competitionsController.spagetti)

// router.post('/hackathon', competitionsController.hackathon)

module.exports = router