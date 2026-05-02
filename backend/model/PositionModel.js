const mongoose = require("mongoose");
const { PositionSchema } = require("../Schema/PositionSchema");
const PositionModel= mongoose.model("Postition",PositionSchema);

module.exports={ PositionModel };