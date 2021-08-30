const mongoose =require('mongoose');


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean, default:false,required:true},
});

userSchema.path('email').validate(async(email) =>{
const emailCount= await mongoose.models.User.countDocuments({email})
return !emailCount
},'Email already exists');

const User = mongoose.model('User',userSchema);
module.exports = User;