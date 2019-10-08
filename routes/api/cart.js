const express = require("express");
const router = express.Router();
const Cart = require('../../models/Cart');
const User = require('../../models/User');
const Product = require('../../models/Products');

router.post('/:prodId', (req, res) => {
  // const prodId = req
const user = User.findById(req.user.id).select('-password');
const product = Product.findById(req.params.prodId);
})

router.get('/', (req, res) => {
  res.send("Cart Router is Up")
})
module.exports = router;