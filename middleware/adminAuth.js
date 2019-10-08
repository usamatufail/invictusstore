const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get Token from header
  const token = req.header("x-auth-token");

 
  //check if token
  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
  }
  //verify token
  try {
    const decoded = jwt.verify(token, config.get("secretKey"));
    // if(decoded.user.role !== "admin"){
    //   res.json({ msg: "prmission denied"})
    // }else{
      req.user = decoded.user;
      console.log("role is",req.user.role)

      next();

    // }
  } catch (err) {

    res.status(401).json({ msg: "Token is not valid" });
  }
};
