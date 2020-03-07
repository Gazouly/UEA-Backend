const express = require('express')
const router = express.Router()

// Middlewares
const upload = require('../middlewares/upload')

const competitionsController = require('../controllers/competitions')

router.post('/graduates', upload, competitionsController.graduates)
router.post('/undergraduates', upload, competitionsController.undergraduates)

router.post('/schools', upload, competitionsController.schools)
router.post('/techschools', upload, competitionsController.techschools)

router.post('/micromouse', upload, competitionsController.micromouse)
router.post('/arc6', upload, competitionsController.arc6)
router.post('/spagetti', upload, competitionsController.spagetti)

router.post('/hackathon', upload, competitionsController.hackathon)

module.exports = router