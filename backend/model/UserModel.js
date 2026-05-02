const mongoose=require("mongoose");
const userSchema=require("../Schema/UserSchema");
const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel};