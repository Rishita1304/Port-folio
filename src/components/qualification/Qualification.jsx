import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title"> Experience</h2>
      <span className="section__subtitle ">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i> Education
                </div> */}

          {/* <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                </div> */}
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">JavaScript</h3>
                {/* <span className='qualification__subtitle'>
                                Spain - Institute
                            </span> */}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React</h3>
                {/* <span className='qualification__subtitle'>
                                
                            </span> */}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">NodeJS</h3>
                {/* <span className='qualification__subtitle'>
                                Spain - Institute
                            </span> */}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MongoDB</h3>
                {/* <span className='qualification__subtitle'>
                                Spain - Institute
                            </span> */}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BDCOE</h3>
                <span className="qualification__subtitle">
                  Backend Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ByteVerse NIT Patna</h3>
                <span className="qualification__subtitle">
                  Hackathon Finalist
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> April 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">GSSOC'23</h3>
                <span className="qualification__subtitle">Contributer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June 2023 - Aug
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>JANATIG</h3>
                            <span className='qualification__subtitle'>
                                Full Stack Developer Intern
                            </span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> Sept 2023 - Nov 2023
                            </div>
                        </div>
                        
                      
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
