import React from "react";
import "./Projects.css";
import netflix from "../../assets/netflix.png";
import weather from "../../assets/weather.png";
import tictactoe from "../../assets/tictactoe.png";
import todo from "../../assets/todo.png";
import figma from "../../assets/figma.png";
import minuteToFood from "../../assets/minute-to-food.png";
import chat from "../../assets/chat.png";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="Projects">
      <header>
        <h1>React PROJECTS</h1>
      </header>
      <Project
        header="Visualizeee"
        p="In this chat app, users can create accounts and log in to access the
            chat interface. Once logged in, they can view a list of online users
            who are currently active on the platform. Users can initiate
            conversations by selecting another user from the online user list or
            by searching for specific users. When a conversation is started, the
            chat messages are sent and received in real time Enjoy user
            Experience!!!"
        live="https://visualizeee.netlify.app/"
        source="https://github.com/haristunner/chat-front"
        img={chat}
      />
      <Project
        header="Minute To Food"
        p="A food delivery app using React with Redux Toolkit that features a
          landing page with secure Google authentication for customer sign-in.
          The app includes an add-to-cart functionality that allows users to
          select and modify their food order before proceeding to checkout.
          Enjoy user Experience!!!"
        live="https://minute-to-food.netlify.app/"
        source="https://github.com/haristunner/minute-to-food"
        img={minuteToFood}
      />
      <Project
        header="Netflix-clone"
        p="It is an Netflix Clone website.The movies are shown from the IMDB
            API. The Authentication is working by using the Firebase
            Authentication System.It has both the Login and the LogOut
            Facility.Enjoy user Experience!!!"
        live="https://hariprasath-netflix.netlify.app/"
        source="https://github.com/haristunner/Netflix-Clone"
        img={netflix}
      />
      <Project
        header="Weather App"
        p="Access current weather data for any location on Earth including over
            200,000 cities! with help of Open weather Api . Enjoy user
            experience !!!"
        live="https://hariprasath-weather.netlify.app/"
        source="https://github.com/haristunner/Weather-App"
        img={weather}
      />

      <Project
        header="Tic-Tac-Toe"
        p="A game in which two players alternately put Xs and Os in
            compartments of a figure formed by two vertical lines crossing two
            horizontal lines and each tries to get a row of three Xs or three Os
            before the opponent does. Enjoy user experience !!!"
        live="https://hariprasath-tictactoe.netlify.app/"
        source="https://github.com/haristunner/React-Tic-Tac-Toe"
        img={tictactoe}
      />
      <Project
        header="To-Do List"
        p="Todo list to keep tracking of personal tasks for office purposes ,
            diet plan and things to remind and so on. Enjoy user experience !!!"
        live="https://hariprasath-todo.netlify.app/"
        source="https://github.com/haristunner/Todo-React"
        img={todo}
      />
      <header>
        <h1>Figma DESIGN</h1>
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
