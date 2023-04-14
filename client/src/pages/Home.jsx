import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import HomeBody from "../component/HomeBody";
import Footer from "../component/Footer";
import ContactUs from "../component/ContactUs";
import AboutUs from "../component/AboutUs";
import OurTeam from "../component/OurTeam";
import Telegram from "../component/Telegram";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <HomeBody />
      <AboutUs />
      <OurTeam />
      <ContactUs />
      <Telegram />
      <Footer />
    </>
  );
};

export default Home;
