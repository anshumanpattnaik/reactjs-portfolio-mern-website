var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Skills = require("./skills_schema");
mongoose.connect("mongodb://127.0.0.1:27017/skills");

router.get("/", (req, res) => {
    Skills.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;