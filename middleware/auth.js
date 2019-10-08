const jwt = require("jsonwebtoken");
const config = require("config");
const  User = require("../models/User")

module.exports = async function(req, res, next) {
  //Get Token from header
  const token = req.header("x-auth-token");

 
  //check if token
  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
  }
  //verify token
  try {
    const decoded = jwt.verify(token, config.get("secretKey"));
    
      const Id = decoded.user.id;

      const user = await User.findById(Id)
      req.user=user
      next();

    // }
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
