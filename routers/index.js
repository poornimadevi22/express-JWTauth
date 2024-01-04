const router=require('express').Router();
const { verifyUserToken, IsUser, IsAdmin } = require('../Auth');
const userController = require('./Controller/user');

//new user
router.post('/register',userController.register);

//login
router.post('/login',userController.login);

router.get('/events',verifyUserToken, IsUser,userController.userEvent);

router.get('/special', verifyUserToken,IsAdmin,userController.adminEvent)


module.exports=router;

