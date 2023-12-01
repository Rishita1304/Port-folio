import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tech Stacks</span>

      <div className="skills__container container">
        <div className="skills__divs">
          <div className="skills__titles">Languages and Tools</div>
          <div className="skills__box">
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
          <a
            href="https://www.w3schools.com/css/"
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
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
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

          </div>
        </div>
        <div className="skills__divs">
          <div className="skills__titles">Libraries and Frameworks</div>
          <div className="skills__box">
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
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="50"
              className="skill__logo"
              height="50"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
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
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="50"
              className="skill__logo"
              height="40"
            />{" "}
          </a>{" "}
        </div>
      </div>
        <div className="skills__divs">
          <div className="skills__titles">Databases </div>
          <div className="skills__box sk_ti">
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
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
          <a
            href="https://firebase.google.com/"
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
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Skills;
