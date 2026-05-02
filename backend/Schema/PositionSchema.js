const mongoose = require("mongoose");



const PositionSchema=new mongoose.Schema({
     name:String,
     qty:String,
     avg:Number,
     price:Number,
     net:String,
     day:String,
     isloss:Boolean,
});


module.exports= {PositionSchema};