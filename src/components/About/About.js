import React from "react";
import "./About.css";
import Image from "../../assets/image1.jpeg";

export const About = () => {
  return (
    <div className="About">
      <div className="about__container">
        <div className="about__img">
          <img src={Image} alt="" />
        </div>
        <div className="about__paragraph">
          <h1>About ME</h1>
          <div>
            Hi! I am <span>HariPrasath</span>, a front end developer focused on
            crafting great web experiences. I enjoy creating beautifully
            designed, intuitive and functional websites. I'm a hard working and
            dedicated professional front end developer user interface designer
            with a keen eye for detail, and a determination to deliver the very
            highest quality. I am motivated, enthusiastic and well organized,
            primarily based around user interfaces.I am Good in HTML5 , CSS3 ,
            JavaScript , React.js , C++ and Firebase .
          </div>
          <a
            href="https://drive.google.com/file/d/1uD34LUrwMbv9UNZAdejnBpDBKDttE_Ak/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
