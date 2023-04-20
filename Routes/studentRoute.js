const express = require("express");
const router = express.Router();
const {
  loginRoute,
  studentRegisterRoute,
} = require("../controllers/studentAuth");
const {
  contactRoute,
  courseRoute,
  getAllCourse,
  getSingleCourse,
} = require("../controllers/controllers");
router.route("/login/student").post(loginRoute);
router.route("/register/Student").post(studentRegisterRoute);
router.route("/contact").post(contactRoute);
router.route("/admin/uploadCourse").post(courseRoute);
router.route("/course").get(getAllCourse);
router.route("/course/:id").get(getSingleCourse);

module.exports = router;
