import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import QrCode from "../images/QR_Code.jpeg";
import Telegram from "../component/Telegram";

const Join = () => {
  return (
    <>
      <Navbar />
      <section className=" Join_container">
        <h1 className="course_heading">How To Join The Test Series</h1>
        <div className="Join_content">
          <p>
            You can make a payment of Rs.399 through
            <span>
              <a
                href="https://futureofficersacademy.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                PAYTM
              </a>
            </span>
            ,
            <span>
              <a
                href="https://futureofficersacademy.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                GOOGLE PAY{" "}
              </a>
            </span>
            or
            <span>
              <a
                href="https://futureofficersacademy.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                PHONE PAY{" "}
              </a>
            </span>
            to the UPI{" "}
            <span style={{ color: "#FF6366" }}> dkjggc1996@okicici</span>. Once
            you've made your payment, please send me a screenshot via
            <span>
              <a
                href="https://t.me/Future_officer_academy"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Telegram{" "}
              </a>
            </span>
            or @Future_officer_academy. Only those who have made a payment and
            sent me a screenshot will receive the Test series Access.
          </p>
          <h1 className="course_heading">Here is the UPI QR CODE</h1>
          <img src={QrCode} alt="Qr-code" className="QrCode" />
          <span>
            <a href="/static/media/QR_Code.c10d8e149235ff69ee80.jpeg" download>
              <button type="" className="body_btn">
                Download QR Code
              </button>
            </a>{" "}
          </span>
        </div>
        <Telegram />
      </section>
      <Footer />
    </>
  );
};

export default Join;
