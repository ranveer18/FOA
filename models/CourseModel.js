const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  courseLink: {
    type: String,
    required: true,
  },
});

const Course = new mongoose.model("Course", courseSchema);
module.exports = Course;
