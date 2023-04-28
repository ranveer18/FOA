import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../images/home-img.svg";
// import ContactUs from "../component/ContactUs";
const HomeBody = () => {
  return (
    <>
      <section className="body_container">
        <div className="body_content">
          <div className="left_content">
            <h1 className="body_heading">FUTURE OFFICERS ACADEMY</h1>
            <h3 className="body_heading">Making Officers of Tomorrow</h3>
            <p className="body_para">
              Future Officer Academy brings you unitwise and topicwise mock test
              series specially dedicated to RPSC FSO.
            </p>
            <Link to="/Join">
              <button className="body_btn">Join Test Series</button>
            </Link>
          </div>
          <div className="right_content">
            <img src={homeImg} alt="Home Image" className="homeImg" />
          </div>
        </div>
      </section>
      {/* <ContactUs /> */}
    </>
  );
};

export default HomeBody;
