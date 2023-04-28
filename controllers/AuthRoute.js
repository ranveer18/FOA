require("../db/conn");
const jwt = require("jsonwebtoken");

const logout = async (req, res) => {
  try {
    await res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("Logout Successfully");
  } catch (error) {
    console.log(error);
  }
};

const student = async (req, res) => {
  try {
    await res.send(req.rootUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logout, student };
