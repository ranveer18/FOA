import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Teamdata } from "./Teamdata";
const OurTeam = () => {
  return (
    <>
      <section className="team_container">
        <h1 className="body_heading">Our Team</h1>
        <div className="background_line"></div>
        <div className="team_content">
          {Teamdata.map(
            ({
              id,
              name,
              role,
              aos,
              image,
              twitter,
              facebook,
              linkedin,
              instagram,
            }) => {
              return (
                <div className="team_card-border" data-aos={aos} key={id}>
                  <div className="team_card">
                    <img src={image} alt={`${role}`} className="our_team-img" />
                    <div className="team_details">
                      <h3>{name}</h3>
                      <p>{role}</p>
                      <div className="socials_links">
                        <a href={twitter} target="_blank" rel="noreferrer">
                          <FaTwitter />
                        </a>
                        <a href={linkedin} target="_blank" rel="noreferrer">
                          <FaLinkedin />
                        </a>
                        <a href={facebook} target="_blank" rel="noreferrer">
                          <FaFacebook />
                        </a>
                        <a href={instagram} target="_blank" rel="noreferrer">
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
