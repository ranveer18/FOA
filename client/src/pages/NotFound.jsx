import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import notfound from "../images/notfound.svg";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="body_container body_conatiner_404">
        <div className="notFound">
          <img src={notfound} alt="img" className="notfoundImg" />
          {/* <h1 className="body_heading">OOPS!</h1> */}
          <h1 className="body_heading">Page Not Found</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
