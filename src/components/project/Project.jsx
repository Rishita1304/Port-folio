import React from 'react'
import './project.css'
import tr from '../../assests/trv.jpg'
import wt from '../../assests/wtr.jpg'
import nf from '../../assests/ntf.jpg'
import sm from '../../assests/sm.jpg'
import ecom from '../../assests/ecom.jpg'

const Project = () => {
  return (
<section className='project section' id='projects'>
<h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'>My Recent Works</span>
        <div className='project__container container'>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={tr} alt='' />
                </div>
                <h3>Hotel Booking Site</h3>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Travel-Site' className='buttons' target='_blank'>Github</a>
                <a href='https://travel-site-lg5u.onrender.com' className='button' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={wt} alt='' />
                </div>
                <h3>Weather App</h3>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Weather-App' className='buttons' target='_blank'>Github</a>
                <a href='https://weatherapp-tcy7.onrender.com' className='button' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={nf} alt='' />
                </div>
                <h3>Netflix Clone</h3>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Netflix-Clone' className='buttons' target='_blank'>Github</a>
                <a href='https://netflixc.onrender.com' className='button' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={sm} alt='' />
                </div>
                <h3>Social Media Site</h3>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Social-Media-Site' className='buttons' target='_blank'>Github</a>
                <a href='https://socialmedia-f4c6.onrender.com' className='button' target='_blank'>Live Demo</a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={ecom} alt='' />
                </div>
                <h3>E-commerce Site</h3>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Ecommerce-Site' className='buttons' target='_blank'>Github</a>
                <a href='https://ecom-fdtv.onrender.com' className='button' target='_blank'>Live Demo</a>
                </div>
            </article>
            {/* <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={img1} alt='' />
                </div>
                <h3>This is project title</h3>
                <div className='project-cta'>
                <a href='https://github.com' className='buttons' target='_blank'>Github</a>
                <a href='' className='button' target='_blank'>Live Demo</a>
                </div>
            </article> */}
        </div>
</section>
  )
}

export default Project
