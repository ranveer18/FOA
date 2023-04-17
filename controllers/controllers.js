require("../db/conn");
const contact = require("../models/ContactModel");

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
module.exports = contactRoute;
