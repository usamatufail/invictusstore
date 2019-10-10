const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();
//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/product", require("./routes/api/products"));
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/cart", require("./routes/api/cart"));
app.use("/api/contact", require("./routes/api/contact"));

app.use(express.static("./uploads"));
app.use(express.static("./"));

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));

// M1075
// mongodb://localhost:27017/invitcus-eCom


