var express = require('express');
var router = express.Router();
const postController = require('../controller/post_controller');
/* var multer = require('multer'); */

const protect = (req,res,next)=>{
    if(req.isAuthenticated()) return next(); /// protegemos las rutas 
    res.redirect('/'); // si no esta logeado no le dejamos entrar
}
/* GET home page. */
router.get('/',protect,postController.timeline);
router.get('/crear',protect,postController.create);
router.get('/cerrar',postController.cerrar);
router.get('/leer/:id',postController.leer);

//peticiones post
router.post('/',postController.save);

module.exports = router;