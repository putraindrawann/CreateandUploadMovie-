const express = require('express');
const router = express.Router();
const UserServ = require('../services/user.service')
const {getallUser,addNewUser,updateOneUser,deleteOneUser} = require('../controllers/user.controller')
const userServ = new UserServ()
const tokenValidation = require('../middlewares/token-validation');

router.use(tokenValidation);
router.delete('/',(req,res,next)=>deleteOneUser(req,res,userServ));
router.post('/regist',(req,res,next)=>addNewUser(req,res,userServ));
router.put('/',(req,res,next)=>updateOneUser(req,res,userServ));
router.get('/',(req,res,next)=>getallUser(req,res,userServ));


module.exports = router;