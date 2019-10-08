const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../../models/Contact');

router.post('/',
[
  check("name","Please Enter you name").not().isEmpty(),
  check("email","Please Enter you email").not().isEmpty(),
  check("message","Please Enter you message").not().isEmpty(),
],
 async (req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()){
  res.status(400).json({ errors: errors.array() })
}
const {
name,
email,
message
} = req.body;

const newMessage = {
  name,
  email,
  message
}
 try {
   let message = new Contact(newMessage);
   await message.save();
   res.json(message);
 } catch (err) {
   console.error(err.message);
   res.status(500).send("Server Error");
 }
});

router.get("/", async (req, res ) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})


module.exports = router;