const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        
    },
    address:{
        type:String
    },
    phone_number:{
        type:Number

    },
    gender:{
        type:String
    },
  
    password:{
        type:String
    },
    email:{
        type:String
    },

    dob:{
        type:Date

    },

    country:{
        type:String
    },
   

  
    image:{
        type:String
        

    },
    tokens:[{
        tokens:{
        type:String,
        }
    }]

})



userSchema.statics.checkCrediantialsDb=async(user,pass)=>{
    const user1=await User.findOne({guest_name:user,password:pass})
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
   
const User=mongoose.model('Guest',userSchema)
module.exports=User

