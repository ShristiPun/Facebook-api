const  express=require('express');
const  router=express.Router();
const  userController=require('../controller/userController');
const  userModel=require('../model/userModel');

router.post('/userAdd',userController.addUser)
router.get('/getUser',userController.getUser)
router.delete('/deleteUser/:_id',userController.deleteUser)
router.put('/updateUser/:_id',userController.updateUser)
module.exports=router


router.post("/login", async function(req, res){
    try{
        const user = await userModel.checkCrediantialsDb(req.body.email,
       req.body.password)
        const token = await user.generateAuthToken()
       res.send({user,token})
        }
        catch(e){
            res.status(400).send()
        }
       })


