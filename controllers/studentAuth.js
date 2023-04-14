require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const studentRegister = require("../models/studentModel");

//register student data route

const studentRegisterRoute = async (req, res) => {
  try {
    const { name, phone, password, cpassword } = req.body;
    if (!name || !phone || !password || !cpassword) {
      return res.status(400).json({ error: "Enter valid data" });
    }

    const userExit = await studentRegister.findOne({
      phone: phone,
    });
    if (userExit) {
      return res.status(422).json({ error: "user already exit" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const verificationToken = crypto.randomBytes(40).toString("hex");
      const StudentRegisterData = await studentRegister.create({
        name,
        phone,
        password,
        cpassword,
      });
      await StudentRegisterData.save();
      res.status(201).json({ message: req.body });
    }
  } catch (error) {
    console.log(error);
  }
};

// login route

const loginRoute = async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ error: "Enter valid data" });
    }

    const userLogin = await studentRegister.findOne({ phone: phone });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        // origin: "https://futureofficersacademy.netlify.app/",
        expires: new Date(Date.now() + 1800000),
        httpOnly: false,

        // 30min valid
      });
      // console.log(phone);
      // console.log(password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid creditials" });
      } else {
        res.status(201).json({ message: "Login successfully" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginRoute,
  studentRegisterRoute,
};
