import React from "react";
import "./Projects.css";
import netflix from "../../assets/netflix.png";
import weather from "../../assets/weather.png";
import tictactoe from "../../assets/tictactoe.png";
import todo from "../../assets/todo.png";
import figma from "../../assets/figma.png";

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="project">
        <header>
          <h1>React PROJECTS</h1>
        </header>
        <div className="projects__name">
          <header>Netflix</header>
          <p>
            It is an Netflix Clone website.The movies are shown from the IMDB
            API. The Authentication is working by using the Firebase
            Authentication System.It has both the Login and the LogOut
            Facility.Enjoy user Experience!!!
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://hariprasath-netflix.netlify.app/"
              >
                see live
              </a>
              <a
                className="projects__code"
                href="https://github.com/haristunner/Netflix-Clone"
              >
                source code
              </a>
            </div>
            <div className="projects__img">
              <img src={netflix} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="projects__name">
          <header>Weather App</header>
          <p>
            Access current weather data for any location on Earth including over
            200,000 cities! with help of Open weather Api . Enjoy user
            experience !!!
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://hariprasath-weather.netlify.app/"
              >
                see live
              </a>
              <a
                className="projects__code"
                href="https://github.com/haristunner/Weather-App"
              >
                source code
              </a>
            </div>
            <div className="projects__img">
              <img src={weather} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="projects__name">
          <header>Tic-Tac-Toe</header>
          <p>
            A game in which two players alternately put Xs and Os in
            compartments of a figure formed by two vertical lines crossing two
            horizontal lines and each tries to get a row of three Xs or three Os
            before the opponent does. Enjoy user experience !!!
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://hariprasath-tictactoe.netlify.app/"
              >
                see live
              </a>
              <a
                className="projects__code"
                href="https://github.com/haristunner/React-Tic-Tac-Toes"
              >
                source code
              </a>
            </div>
            <div className="projects__img">
              <img src={tictactoe} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="projects__name">
          <header>To-Do List</header>
          <p>
            Todo list to keep tracking of personal tasks for office purposes ,
            diet plan and things to remind and so on. Enjoy user experience !!!
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://hariprasath-todo.netlify.app/"
              >
                see live
              </a>
              <a
                className="projects__code"
                href="https://github.com/haristunner/Todo-React"
              >
                source code
              </a>
            </div>
            <div className="projects__img">
              <img src={todo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <header>
        <h1 style={{ marginTop: "6vh" }}>Figma DESIGN</h1>
      </header>
      <div className="project">
        <div className="projects__name">
          <header>Portfolio</header>
          <p>
            My first Figma design of this portfolio site. In this, I learnt how
            to use figma for designing.
          </p>
          <div className="projects__sample">
            <div className="projects__btn">
              <a
                className="projects__live"
                href="https://www.figma.com/file/bih8vaWxJsozQ0ob86REnj/portfolio?t=8s5MKWppImcU7Xwv-6"
              >
                see design
              </a>
            </div>
            <div className="projects__img">
              <img src={figma} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
