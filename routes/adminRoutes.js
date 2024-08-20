const express=require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getAllUsersController, getAllDoctorsController } = require('../controllers/adminCtrl')

//router object
const router=express.Router()


//GET method || users
router.get('/getAllUsers',authMiddleware,getAllUsersController)

//GET method || doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

module.exports=router