const mongoose=require('mongoose');
const Post=mongoose.model('Post',{

    status:{
        type:String
    },
    image:{
        type:String
    },
    name:{
        type:String
    }
})
module.exports=Post