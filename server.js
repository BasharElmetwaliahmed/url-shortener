const app= require('./app')
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shorter").then(() => {
  console.log("connected to MongoDB");
});
app.listen("3000", () => {
  console.log("start listening on port 3000");
});