const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
        
    },
    address:{
        type:String,
        trim:true
    
    },
    phone:{
        type:String,
        require:true,
        trim:true

    },
    gender:{
        type:String,
        require:true,
        trim:true
    },
    dob:{
        type:String,
        require:true,
        trim:true

    },
  

    email:{
        type:String,
        require:true,
        trim:true

    },

  
    password:{
        type:String,
        require:true,
        trim:true

    },
   
    tokens:[{
        tokens:{
        type:String,
        }
    }]

})



userSchema.statics.checkCrediantialsDb=async(user,pass)=>{
    const user1=await User.findOne({email:user,password:pass})
    return user1;
}


userSchema.methods.generateAuthToken = async function () {
    const user = this
   const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
   
   console.log(token);
    user.tokens = user.tokens.concat({ token :token })
    await user.save()
    return token
   }
   
const User=mongoose.model('User',userSchema)
module.exports=User

