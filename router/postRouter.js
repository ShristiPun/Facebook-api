const  express=require('express');
const  router=express.Router();
const  postController=require('../controller/postController');
const auth = require('../middleware/auth')
const upload=require('../controller/upload');


router.post('/postAdd',[upload],postController.addPost)
router.get('/postFind',postController.findpost)

module.exports =router