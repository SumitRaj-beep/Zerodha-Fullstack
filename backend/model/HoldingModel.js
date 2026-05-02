const mongoose= require('mongoose');
const { HoldingSchema } = require("../Schema/HoldingSchema"); // ⚠️ FIX PATH

const HoldingModel= mongoose.model("Holding",HoldingSchema); //the schema defined used inside the model is holdingschema 


module.exports={ HoldingModel };