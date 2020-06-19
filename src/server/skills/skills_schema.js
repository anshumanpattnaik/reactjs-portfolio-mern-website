const mongoose = require("mongoose");
const skillsSchema = new mongoose.Schema({
  tech_stack: {
    type: String,
    text: true,
    required: true
  },
  label: {
    type: String,
    text: true,
    required: true
  },
  skills: [{
    type: String
  }]
});
module.exports = mongoose.model("Skills", skillsSchema);