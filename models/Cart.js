const mongoose  = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  products:{
    type: mongoose.Schema.ObjectId,
    ref: "product"
  }
})

module.exports = Cart = mongoose.model('cart', CartSchema);