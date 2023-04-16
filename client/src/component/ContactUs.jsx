import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // alert(`${name},${lastname},${email},${phone},${message}`);
    alert("Thank you for contacting us");
  };

  return (
    <>
      <article className="get-in-touch" id="get-in-touch">
        <section className="get-in-touch-section">
          <h2 className="body_heading">Get In Touch With Us</h2>
        </section>
        <section className="get-in-touch-details">
          <section className="get-in-touch-contact-info" data-aos="fade-down">
            <h2>Contact Information</h2>
            <div className="get-in-touch-social-links">
              <a href="./">
                <FaTwitter />
              </a>
              <a href="./">
                <FaLinkedin />
              </a>
              <a href="./">
                <FaFacebook />
              </a>
              <a href="./">
                <FaInstagram />
              </a>
            </div>
            <div className="circle get-in-touch-contact-info-circle-1"></div>
            <div className="circle get-in-touch-contact-info-circle-2"></div>
            <div className="circle get-in-touch-contact-info-circle-3"></div>
            <h4>
              <FaPhoneAlt />
              <span>+91 7564XXXX</span>
            </h4>
            <h4>
              <FaEnvelope />
              <span>foodsafetyofficer2023@gmail.com</span>
            </h4>
            <h4>
              <FaMapMarkerAlt />
              <span>
                Future Officer Academy,
                <br />
                Jaipur, Rajasthan
                <br />
                302001
              </span>
            </h4>
          </section>

          <section className="get-in-touch-form" data-aos="fade-up">
            <form
              action="https://formsubmit.co/sajan.ranveer@gmail.com"
              name="userDetails"
              id="form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-user-name">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="firstName"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    name="lastName"
                    type="text"
                    id="lastName"
                    value={lastname}
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  name="phone"
                  type="text"
                  id="mobile"
                  value={phone}
                  placeholder="eg: +91 9876543210"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="Message" required>
                  Message
                </label>
                <textarea
                  placeholder="Type your message here"
                  name="Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>

              <input type="submit" className="body_btn" />
            </form>
          </section>
        </section>
      </article>
    </>
  );
};

export default ContactUs;
