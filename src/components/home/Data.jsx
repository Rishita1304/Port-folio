import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Data = () => {
  const [text]= useTypewriter({
    words: ['Web Developer', 'Programmer', 'Open Source Contributer', 'ML Enthusiast'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })
 
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  // const period = 50;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(400);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }
  // <span className="wrap">{text}|</span>

  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: [
  //       "Developer",
  //       "Programmer",
  //       "Enthusiast",
  //       "Open Source Contributor",
  //     ],
  //   });
  // }, []);
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
