const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth")
const Permission = require("../../middleware/permission")

const router = express.Router();

//@route   POST admin/user/all
//@desc    Get all users
//@access  Private
router.get('/all', auth, Permission, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }

})

//@route   POST user/register
//@desc    Register user
//@access  Public
router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check("password", "password must be 6 characters or more").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist" }] });
      }

      user = new User({
        name,
        email,
        password,
        role
      });

        
      const salt = await bcrypt.genSalt(12);
      
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          role: user.role
        }
      };
      jwt.sign(
        payload,
        config.get("secretKey"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


module.exports = router;
