const mongoose = require("mongoose");
const { OrderSchema } = require("../Schema/OrderSchema");

const OrderModel =mongoose.model("Order", OrderSchema);


module.exports={OrderModel};