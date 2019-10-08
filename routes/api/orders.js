const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Order = require("../../models/Orders");
const User = require("../../models/User");
const Permission = require("../../middleware/permission");
const router = express.Router();

//@route   POST user/order/create
//@desc    Create Order
//@access  Private
router.post(
  "/new",
  [
    check("firstName", "First Name is required")
      .not()
      .isEmpty(),
    check("address1", "Please enter address")
      .not()
      .isEmpty(),
    check("city", "Please select City")
      .not()
      .isEmpty(),
    check("state", "Please select state")
      .not()
      .isEmpty(),
    check("zip", "Please enter zip-code")
      .not()
      .isEmpty(),
    check("country", "Please enter country")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      // const user = await User.findById(req.user.id).select("-password");
      const {
        firstName,
        lastName,
        address1: address2,
        city,
        state,
        zip,
        country,
        cartItems,
        paymentMethod
      } = req.body;

      const newOrder = {
        firstName,
        lastName,
        address1: address2,
        city,
        state,
        zip,
        country,
        paymentMethod,
        cartItems
        // user
      };

      let order = new Order(newOrder);
      await order.save();
      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   POST ap/product/edit/:id
//@desc    Update Product
//@access  Private

router.post(
  "/edit/:id",

  auth,
  Permission,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      paymentMethod,
      status
    } = req.body;

    //Build Product Object
    const orderFields = {};
    orderFields._id = req.params.id;
    if (firstName) orderFields.firstName = firstName;
    if (lastName) orderFields.lastName = lastName;
    if (address1) orderFields.address1 = address1;
    if (address2) orderFields.address2 = address2;
    if (city) orderFields.city = city;
    if (state) orderFields.state = state;
    if (zip) orderFields.zip = zip;
    if (country) orderFields.country = country;
    if (paymentMethod) orderFields.paymentMethod = paymentMethod;
    if (status) orderFields.status = status;

    try {
      let updOrder = await Order.findById({ _id: req.params.id });

      if (updOrder) {
        //Update
        updOrder = await Order.findOneAndUpdate(
          { _id: req.params.id },
          { $set: orderFields },
          { new: true }
        );

        return res.json(updOrder);
      }
      return res.status(404).json({ msg: "No Product Found" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   POST admin/orders/all
//@desc    Get all orders
//@access  Private

router.get("/all", auth, Permission, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", ["name", "email"]);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

router.get("/:orderId", auth, Permission, async (req, res) => {
  try {
    const id = req.params.orderId;
    const currentOrder = await Order.findById(id);

    if (!currentOrder) {
      res.status(400).json({ msg: "No Order found" });
    }

    res.json(currentOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/current/:orderId", auth, Permission, async (req, res) => {
  try {
    const id = req.params.orderId;
    const curentOrder = await Order.findByIdAndRemove(id);
    if (!curentOrder) {
      res.json({ msg: "No order found" });
    }
    res.json({ msg: "Order Deleted Successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
