const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  firstName: {
    type: String,
    // required: true
  },
 
  lastName:{
    type: String,
  },
  address1: {
    type: String,
    // required: true
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  zip: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
 
  paymentMethod : {
    type: String,
    // required: true
  },
  status: {
    type: String,
    default: "inProgress"
  },
  cartItems : {
  type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Order = mongoose.model('order', OrderSchema);
