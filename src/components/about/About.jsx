import React from "react";
import "./about.css";
import about from "../../assests/about.svg";
import resume from "../../assests/CV.pdf";
import Info from "./Info";
import { FiLink } from "react-icons/fi";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={about} className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Welcome to my corner of the web! I'm a passionate Full Stack Developer,
            currently at Big Data Center Of Excellence. I have developed many
            backend servers as well as frontend applications. I'm passionate
            about developing new user-friendly applications with beautiful
            interfaces. I'm also keen in learning new technologies and stacks.{" "}
          </p>
          <div className="newdiv">

          <a download href={resume} className="button button--flex">
            Download CV <i className="uil uil-file-alt"></i>
          </a>
          <a href="https://rishita1304.github.io/Resume/" className="buttonn newbt"><FiLink/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
