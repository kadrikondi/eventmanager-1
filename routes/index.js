const express = require('express')
const router = express.Router()
const centerController = require('../controllers/centerController')

router.get('/', centerController.displayHomePage)
router.post('/centers', centerController.addNewCenter)
router.get('/centers', centerController.getAllCenters)
router.get('/centers/:id',centerController.getOneCenterById)
module.exports = router