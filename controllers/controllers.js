require("../db/conn");
const contact = require("../models/ContactModel");
const Course = require("../models/CourseModel");

const getAllCourse = async (req, res) => {
  const getAllCourseData = await Course.find();
  res.status(200).json(getAllCourseData);
};

const getSingleCourse = async (req, res) => {
  const _id = req.params.id;
  const getSingleCourseData = await Course.findById({ _id });
  if (!getSingleCourseData) {
    res.status(404).send();
  } else {
    res.status(200).send(getSingleCourseData);
  }
};
const contactRoute = async (req, res) => {
  try {
    const { name, lastname, email, phone, message } = req.body;
    if (!name || !lastname || !email || !phone || !message) {
      return res.status(400).json({ error: "Enter valid data" });
    }

    const contactData = await contact.create({
      name,
      lastname,
      email,
      phone,
      message,
    });
    await contactData.save();
    res.status(201).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

const courseRoute = async (req, res) => {
  try {
    const { name, date, month, courseLink } = req.body;
    if (!name || !date || !month || !courseLink) {
      return res.status(400).json({ error: "Enter valid data" });
    }
    const courseExit = await Course.findOne({
      courseLink: courseLink,
    });
    if (courseExit) {
      return res.status(422).json({ error: "Course already exit" });
    } else {
      const courseData = await Course.create({
        name,
        date,
        month,
        courseLink,
      });
      await courseData.save();
      res.status(201).json({ message: req.body });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  contactRoute,
  courseRoute,
  getAllCourse,
  getSingleCourse,
};
