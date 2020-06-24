const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    text: true,
    required: true
  },
  blog_link: {
    type: String,
    text: true,
    required: true
  },
  thumbnail: {
    type: String,
    text: true,
    required: true
  }
});
module.exports = mongoose.model("Blogs", blogSchema);