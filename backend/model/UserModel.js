const mongoose=require("mongoose");
const userSchema=require("../Schema/userSchema");
const UserModel=mongoose.model("user",userSchema);

module.exports={UserModel};