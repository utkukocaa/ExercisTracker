const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')
const exerciseController = require('./controllers/exerciseController')


router.get('/',homeController.home)






//User related actions
router.post('/api/exercise/new-user',userController.register)
router.get('/api/exercise/users',userController.showUsers)

//Exercise related actions

router.post('/api/exercise/add', exerciseController.addExercise)
router.get('/api/exercise/log/:userId',exerciseController.log)








module.exports = router