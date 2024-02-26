const router=require('express').Router();
const { verifyUserToken, IsUser, IsAdmin } = require('../Auth');
const userController = require('../Controller/user');

//new user
router.post('/register',userController.register);

// //login
router.post('/login',userController.login);



module.exports=router;

