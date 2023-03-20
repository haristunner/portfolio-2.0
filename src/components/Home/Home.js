import React from "react";
import "./Home.css";
import profile from "../../assets/profile2.jpg";

export const Home = () => {
  return (
    <div className="Home">
      <div className="home__container">
        <div className="home__paragraph">
          <h1>Hi, My name is</h1>
          <h3>HARI PRASATH</h3>
          <p>A React Developer</p>
          <button>Know More</button>
        </div>
        <div className="home__img">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
