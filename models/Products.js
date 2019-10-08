let mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'categories'
   },
   admin: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "user"
   },
   title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  tags: {
    type: Array
  },
  vendor: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },

  discountPercentage: {
    type: Number
  },
  file:{
      type:String
  },
});

module.exports = Products = mongoose.model("product", ProductSchema);


// put ID of category in Products Model
