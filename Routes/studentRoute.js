const express = require("express");
const router = express.Router();
const {
  loginRoute,
  studentRegisterRoute,
} = require("../controllers/studentAuth");
const contactRoute = require("../controllers/controllers");
router.route("/login/student").post(loginRoute);
router.route("/register/Student").post(studentRegisterRoute);
router.route("/contact").post(contactRoute);

module.exports = router;
