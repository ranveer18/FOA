const express = require("express");
const router = express.Router();
const {
  loginRoute,
  studentRegisterRoute,
} = require("../controllers/studentAuth");

router.route("/login/student").post(loginRoute);
router.route("/register/Student").post(studentRegisterRoute);

module.exports = router;
