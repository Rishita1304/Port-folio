import React from 'react'
import './about.css'
import about from '../../assests/resume.svg'
import Info from './Info'


const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'>My introduction</span>

        <div className='about__container container grid'>
            <img src={about} className='about__img' />
            

            <div className='about__data'>
            <Info />

            <p className='about__description' >  Motivated and highly productive Backend Developer professional with a research background. Detail-oriented with strong skills in multi-tasking and efficient management of day-to-day office operations.  </p>

            <a download='Resume.pdf' href='' className='button button--flex'>Download CV <i className='uil uil-file-alt'></i></a>
            </div>
        </div>
    </section>
  )
}

export default About