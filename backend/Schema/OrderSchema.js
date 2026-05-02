const mongoose = require("mongoose");

const OrderSchema=new mongoose.Schema({
  
    Name:String,
    qty:Number ,
    Price:Number,
    mode :String,

});




module.exports= {OrderSchema};