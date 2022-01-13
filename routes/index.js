var express = require('express');
var router = express.Router();
const aunthenticator = require('../config/authentication');
const indexController=require('../controller/index_controller');


/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index');
});

router.get('/register',indexController.renderRegister);

router.post('/',aunthenticator.authenticate('local',{
  successRedirect: "/timeline",
  failureRedirect: "/"
}));

router.post('/register/save',indexController.saveUser)

module.exports = router;
