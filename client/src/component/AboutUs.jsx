import React from "react";
import aboutImg from "../images/aboutus.svg";
const AboutUs = () => {
  return (
    <>
      <section className="About_container" id="about">
        <h1 id="aboutHeading" className="rotate1">
          About Us
        </h1>
        <div className="About_content">
          <div data-aos="zoom-in-up">
            <img src={aboutImg} alt="about" className="homeImg" />
          </div>
          <div className="About_para">
            <p className="para" data-aos="zoom-in-up">
              Welcome to FUTURE OFFICERS ACADEMY, the ultimate destination for
              students and professionals looking to ace their exams. We are a
              leading provider of high-quality test series and study materials
              that help our clients achieve their academic and professional
              goals.
            </p>
            <p className="para" data-aos="zoom-in-up">
              At FUTURE OFFICERS ACADEMY, we understand the importance of exam
              preparation and the impact it can have on your future. That's why
              we are committed to providing the best-in-class test series that
              are designed to help you excel in your exams.
            </p>
            <p className="para" data-aos="zoom-in-up">
              Our team of expert educators and experienced professionals work
              tirelessly to create test series and study materials that are
              up-to-date, relevant, and effective. We use the latest
              technologies and techniques to ensure that our clients get the
              most out of their exam preparation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
