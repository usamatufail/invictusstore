const express = require("express");
const router = express.Router();
const Category = require("../../models/Categories");
const Product = require("../../models/Products");
const multer = require("multer");
const path = require("path");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Permission = require("../../middleware/permission");

const storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, path.join(__dirname, "../../uploads/collectionImages"));
  },
  filename: function(req, file, next) {
    next(null, file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");

//@route   POST api/categories/add
//@desc    Add Categories
//@access  Private
router.post(
  "/add",
  upload,
  [
    auth,
    Permission,
    [
      check("category", "category name cannot be empty")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    try {
      const { name } = req.body;
      const file = req.file;
      const newCategory = {
        name,
        file: file.originalname
      };
      const addCategory = new Category(newCategory);
      await addCategory.save();
      res.json(addCategory);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   GET api/categories/all
//@desc    Get all categories
//@access  Private
router.get("/all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route   POST api/categories/edit/:id
//@desc    Update Category
//@access  Private

router.post(
  "/edit/:id",
  upload,

  auth,
  Permission,

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { name } = req.body;

    const file = req.file;

    //Build Category Object
    const categoryFields = {};
    categoryFields._id = req.params.id;
    categoryFields.name = name;
    categoryFields.file = file.originalname;

    try {
      let category = await Category.findById({ _id: req.params.id });

      if (category) {
        //Update
        category = await Category.findOneAndUpdate(
          { _id: req.params.id },
          { $set: categoryFields },
          { new: true }
        );

        return res.json(category);
      }
      return res.status(404).json({ msg: "No Category Found" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   DELETE api/categories/:catId
//@desc    DELETE a category
//@access  Private
router.delete("/:catId", auth, Permission, async (req, res) => {
  try {
    const Id = req.params.catId;

    //delete category
    await Category.findByIdAndRemove(Id);

    //delete products of category
    await Product.deleteMany({ category: Id });

    res.json({ msg: "category deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
