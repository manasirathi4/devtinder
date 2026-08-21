const mongoose=require("mongoose");
const userschema=mongoose.Schema({
firstname:
{
    type:String
},
lastname :{
    type:String
},
emailid:
{
    type:String
},
password:{
    type:String
},
age:{
    type:Number
}


});
const User=mongoose.model("User",userschema);
module.exports=User;

