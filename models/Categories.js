let mongoose = require("mongoose");
let CategoriesSchema = mongoose.Schema({
  name: String,
  file: String,
  children: [
    {
      child: String
    }
  ]
});

module.exports = Categories = mongoose.model("categories", CategoriesSchema);
