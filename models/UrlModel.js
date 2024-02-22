const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  alias: {
    type: String,
    required: [true, "Short Url is required"],
  },
  longUrl: {
    type: String,
    required: [true, "Long Url is required"],
  },
});

const UrlModel = mongoose.model("url", UrlSchema);

module.exports = UrlModel;