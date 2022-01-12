var express = require('express');
var router = express.Router();
const postController = require('../controller/post_controller');
/* var multer = require('multer'); */



/* GET home page. */
router.get('/',(req,res,next)=>{
    if(req.isAuthenticated()) return next(); /// protegemos las rutas 
    res.redirect('/'); // si no esta logeado no le dejamos entrar
},postController.timeline);

router.get('/crear',postController.create);

//peticiones post
router.post('/',postController.save);

module.exports = router;