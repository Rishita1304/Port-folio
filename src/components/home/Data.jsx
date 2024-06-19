import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Data = () => {
  const [text]= useTypewriter({
    words: ['Developer', 'Programmer','Enthusiast' ,'OS Contributer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
  
  return (
    <div className="home__data">
      <h1 className="home__title">Rishita Srivatava</h1>
      <h3 className="home__subtitle">{" "}
      <span>{text}</span>
      <Cursor cursorStyle='|'/>
      </h3>
      <p className="home__description">

      A passionate developer with love for coding, creating digital experiences, and turning ideas into reality.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <i className="uil uil-telegram-alt"></i>
      </a>
    </div>
  );
};

export default Data;
