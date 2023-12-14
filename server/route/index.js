const express = require('express')
const router = express.Router()
const centerController = require('../controllers/centerControllers')
const userController = require('../controllers/userControllers')
const validUser = require('../middleware/userMidleware')



// routes
//center Route
router.get('/', centerController.displayHomePage)
// router.post('/registercenter', centerController.addNewCenter)
router.get('/getallc', centerController.getAllCenter)

//user Route
router.get('/uregister', userController.registerPage)
router.post('/user', userController.registerNewUser)
router.get('/allusers',  userController.getAllUsers)
router.get('/singleuser/:id',userController.getOneUserById)
router.put('/updateuser', userController.updateUser)
router.delete('/userdelete', userController.deleteUser)
router.post('/login', userController.loginUser)







module.exports = router