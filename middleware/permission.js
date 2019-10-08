

module.exports = async function(req, res, next) {

  if(req.user.role!=="admin") return res.send("you are note allow to touch this route ")
  next()
};
