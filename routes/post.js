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
router.get('/myPosts',protect,postController.myPosts)
router.get('/editar/:id',protect,postController.editar)
router.get('/eliminar/:id',protect,postController.deleteConfirm)

//peticiones post
router.post('/',postController.save);
router.post('/edit/:id',postController.saveEdit);
router.post('/delete/:id',postController.delete);

module.exports = router;