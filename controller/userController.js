var  userModel=require('../model/userModel');

//function for adding user data
exports.addUser=(req,res)=>{
    console.log("kushal")
    const user=new userModel(req.body)
    user.save().then(function(){
        res.send("user data has been added")
    }).catch(function(e){
        res.send(e)
    })
}

exports.getUser=(req,res)=>{
    userModel.find().then(function(userdaata){
        res.send(userdata)
    }).catch(function(e){
        res.send(e)
    })
}


//params is for taking data from url
exports.deleteUser=(req,res)    =>{
	userModel.findByIdAndDelete(req.params._id).then(function(){
		res.send("deleted")
	}).catch(function(){
		res.send(e)
	});
}
exports.updateUser=(req,res) =>{
	userModel.findByIdAndUpdate(req.params._id,req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
}