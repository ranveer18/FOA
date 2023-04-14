import React from "react";
// import webDeveloper from "../images/team-developer.jpg";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Teamdata } from "./Teamdata";
const OurTeam = () => {
  return (
    <>
      <section className="team_container">
        <h1 className="body_heading">Our Team</h1>
        <div className="background_line"></div>
        <div className="team_content">
          {Teamdata.map(({ id, name, role, aos, image }) => {
            return (
              <div className="team_card-border" data-aos={aos} key={id}>
                <div className="team_card">
                  <img src={image} alt="img" className="our_team-img" />
                  <div className="team_details">
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <div className="socials_links">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurTeam;