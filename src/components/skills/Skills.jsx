import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Languages and Tools</span>

      <div className="skills__container container">
        <p>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="50"
              className="skill__logo"
              height="40"
            />
          </a>{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
              alt="nestjs"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
              alt="pandas"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
              alt="scikit_learn"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}

        </p>
        {/* <Frontend />

            <Backend /> */}
      </div>
    </section>
  );
};

export default Skills;
