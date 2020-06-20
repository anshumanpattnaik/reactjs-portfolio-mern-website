const mongoose = require("mongoose");
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    text: true,
    required: true
  },
  timestamp: {
    type: String,
    text: true,
    required: true
  },
  tech_stack: [{
    type: String
  }],
  type: {
    type: String,
    text: true,
    required: true
  },
  project_link: {
    type: String,
    text: true,
    required: true
  },
  github_link: {
    type: String,
    text: true,
    required: true
  },
  description: {
    type: String,
    text: true,
    required: true
  }
});
module.exports = mongoose.model("Projects", projectsSchema);