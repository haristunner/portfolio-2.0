import React from "react";
import "./Home.css";
import profile from "../../assets/profile2.jpg";

export const Home = () => {
  const scrollBottom = () => {
    const nextPosition = window.innerHeight;
    console.log(nextPosition);
    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="Home">
      <div className="home__container">
        <div className="home__paragraph">
          <h1>Hi, My name is</h1>
          <h3>HARI PRASATH</h3>
          <p>A React Developer{" < />"}</p>
          <button onClick={scrollBottom}>Know More</button>
        </div>
        <div className="home__img">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
