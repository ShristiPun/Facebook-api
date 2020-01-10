const postModel = require('../model/postModel')

//function for post adding
exports.addPost=(req,res) => {
    req.files.map(function(items){
        const post=new postModel(
            {
                status:req.body.status,
                name:req.body.name,
                image:items.filename
            }
            )
        post.save().then(function()
       {
           res.send("post has been created")
       }).catch(function(e)
       {
           res.send(e)
       })

    })
  
}

//function for getting post

exports.findpost=async(req,res)=>{
    postModel.find().then(function(findAllpost){
        res.send(findAllpost).catch(function(e){
            res.send(e)
        })
    })
}

