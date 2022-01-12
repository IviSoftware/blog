var express = require('express');
var router = express.Router();
const postController = require('../controller/post_controller');
var multer = require('multer');



/* GET home page. */
router.get('/',postController.timeline);
router.get('/crear',postController.create);
router.post('/',postController.save);

module.exports = router;