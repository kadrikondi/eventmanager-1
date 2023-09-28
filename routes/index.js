const express = require('express')
const router = express.Router()
const centerController = require('../controllers/centerController')
const eventController = require('../controllers/eventController')
const userController= require('../controllers/userController')






router.get('/',userController.verifyUser, centerController.displayHomePage)
router.post('/centers', centerController.addNewCenter)
router.get('/centers', centerController.getAllCenters)
router.get('/centers/:id',centerController.getOneCenterById)
router.post('/events', eventController.addNewEvent)
router.get('/events', eventController.getAllEvents)
router.get('/events/:id', eventController.getOneEventById)
router.delete('/events/:id' , eventController.deleteEvent)
router.get('/register',userController.registerPage)
router.post('/register',userController.registerUser)
router.get('/login',userController.getLoginpage)
router.post('/login',userController.loginUser)

module.exports = router