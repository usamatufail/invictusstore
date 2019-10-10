const express = require("express");
const router = express.Router();
const multer = require("multer");
const { check, validationResult } = require("express-validator");
const path = require("path");
const cloudinary = require("cloudinary");
const Product = require("../../models/Products");
const Category = require("../../models/Categories");
const auth = require("../../middleware/auth");
const Permession = require("../../middleware/permission");
require("../../cloudinaryConfig");

//@route   POST api/product/add
//@desc    Add Product
//@access  Private

// const storage = multer.diskStorage({
//   destination: function(req, file, next) {
//     next(null, path.join(__dirname, "../../uploads/itemImages"));
//   },
//   filename: function(req, file, next) {
//     next(null, file.originalname);
//   }
// });

var upload = multer({ storage: multer.diskStorage({}) }).single("file");

router.post(
  "/add",
  upload,
  [
    auth,
    Permession,
    [
      check("title", "please enter product title")
        .not()
        .isEmpty(),
      check("price", "please enter product price")
        .not()
        .isEmpty(),
      check("quantity", "please enter quantity")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      description,
      price,
      tags,
      vendor,
      quantity,
      discountPercentage,
      category
    } = req.body;

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const newProduct = {
      title,
      description,
      price,
      tags,
      vendor,
      quantity,
      discountPercentage,
      category,
      file: result.secure_url
    };
    try {
      //Create
      let product = new Product(newProduct);
      await product.save();
      res.json(product);
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
  upload,

  auth,
  Permession,

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      description,
      price,
      tags,
      vendor,
      quantity,
      discountPercentage,
      category
    } = req.body;

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    //Build Product Object
    const productFields = {};
    productFields._id = req.params.id;
    productFields.title = title;
    productFields.description = description;
    productFields.price = price;
    productFields.tags = tags;
    productFields.vendor = vendor;
    productFields.quantity = quantity;
    productFields.discountPercentage = discountPercentage;
    productFields.file = result.secure_url;
    productFields.category = category;

    try {
      let newProduct = await Product.findById({ _id: req.params.id });

      if (newProduct) {
        //Update
        newProduct = await Product.findOneAndUpdate(
          { _id: req.params.id },
          { $set: productFields },
          { new: true }
        );

        return res.json(newProduct);
      }
      return res.status(404).json({ msg: "No Product Found" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   GET product/all
//@desc    Get all products
//@access  Public
router.get("/all", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   GET api/product/:category
//@desc    Get Product of a Category
//@access  Public

router.get("/:category", async (req, res) => {
  try {
    const categoryProduct = await Product.find({
      category: req.params.category
    }).populate("category");

    res.json(categoryProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   GET api/product/:prodId
//@desc    Get a product by Id
//@access  Public
router.get("/current/:prodId", async (req, res) => {
  try {
    const Id = req.params.prodId;
    const product = await Product.findById(Id);

    if (!product) {
      res.status(400).json({ msg: "No product found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//@route   DELETE api/product/:prodId
//@desc    DELETE product
//@access  Private

router.delete("/current/:prodId", auth, Permession, async (req, res) => {
  try {
    const id = req.params.prodId;
    //remove product
    const product = await Product.findByIdAndRemove(id);
    if (!product) {
      res.json({ msg: "no product found" });
    }
    res.json({ msg: "product deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
