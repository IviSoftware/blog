var express = require('express');
var router = express.Router();
const aunthenticator = require('../config/authentication');


/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index');
});

router.post('/',aunthenticator.authenticate('local',{
  successRedirect: "/timeline",
  failureRedirect: "/"
}))

module.exports = router;
