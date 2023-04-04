import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Contact = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Contact">
      <header>GET IN TOUCH</header>
      <div className="contact__email">
        <p>[ Put Your E-mail to Action ]</p>
        <a href="mailto:hari17prasathb@gmail.com">Call To Action</a>
      </div>
      <footer>
        <div className="footer__container">
          <div className="top" >
            <KeyboardArrowUpIcon onClick={top}
              style={{ fontSize: "40px", cursor: "pointer", color: "#f5f5f5" }}
            />
          </div>
          <div className="contact__socialMedia">
            <a className="github" href="https://github.com/haristunner">
              <GitHubIcon style={{ color: "#e1e1e1" }} />
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/hari_stunner_/"
            >
              <InstagramIcon style={{ color: "#e1e1e1" }} />
            </a>
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/hari-prasath-b-6a005623a"
            >
              <LinkedInIcon style={{ color: "#e1e1e1" }} />
            </a>
            <a className="twitter" href="https://twitter.com/Stunhari10/">
              <TwitterIcon style={{ color: "#e1e1e1" }} />
            </a>
          </div>
          <div className="contact__line"></div>
          <div className="credits">© 2023 - Hari Prasath</div>
        </div>
      </footer>
    </div>
  );
};
