var express = require('express');
var router = express.Router();
const aunthenticator = require('../config/authentication');
const indexController=require('../controller/index_controller');

const protect = (req,res,next)=>{
  if(req.isAuthenticated()) return next(); /// protegemos las rutas 
  res.redirect('/'); // si no esta logeado no le dejamos entrar
}

/* GET home page. */
router.get('/',function(req, res, next) {
  if(req.user){
    res.redirect('/timeline');
  }else{
    res.render('index');
  }
});

router.get('/register',indexController.renderRegister);

router.post('/',aunthenticator.authenticate('local',{
  successRedirect: "/timeline",
  failureRedirect: "/"
}));

router.post('/register/save',indexController.saveUser)

module.exports = router;
