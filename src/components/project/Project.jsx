import React from 'react'
import './project.css'
import tr from '../../assests/Apna Safar.png'
import wt from '../../assests/UpDriven.png'
import nf from '../../assests/Resume Builder.png'
import sm from '../../assests/Connectr.png'
import ecom from '../../assests/E-shoppers.png'
import whe from '../../assests/whether app.png'
import real from '../../assests/estratery.png'
import {BsGithub} from 'react-icons/bs'
import {FiLink} from 'react-icons/fi'

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
                <h3>Apna Safar</h3>
                <span>A hotel booking website that allows users to search and book hotels and resorts.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Travel-Site' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://apna-safar.vercel.app' className='buttonn' target='_blank'><FiLink/></a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={wt} alt='' />
                </div>
                <h3>UpDriven</h3>
                <span>An online platform that enables drivers and passengers to find each other and share rides.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/UpDriven.git' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://updriven.onrender.com/' className='buttonn' target='_blank'><FiLink/></a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={real} alt='' />
                </div>
                <h3>Estratery</h3>
                <span>A real estate website providing seamless property search based on location or price.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Real-estate' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://real-estate-xq2e.vercel.app' className='buttonn' target='_blank'><FiLink/></a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={sm} alt='' />
                </div>
                <h3>Connectr</h3>
                <span>An online platform that enables users to create profiles, connect with other users by following them, and share photos.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Connectr.git' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://connectr.onrender.com' className='buttonn' target='_blank'><FiLink/></a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={ecom} alt='' />
                </div>
                <h3>E-Shoppers</h3>
                <span>A website where customers can browse through products, add items to cart, and complete transactions securely.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/E-Shoppers.git' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://ecom-fdtv.onrender.com' className='buttonn' target='_blank'><FiLink/></a>
                </div>
            </article>
            <article className=' project__item'>
                <div className='project__item-image'>
                    <img src={nf} alt='' />
                </div>
                <h3>Resume Builder</h3>
                <span>To offer guidance for job seekers in crafting professional and structured resumes, ensuring their qualifications shine.</span>
                <div className='project-cta'>
                <a href='https://github.com/Rishita1304/Resume-Builder.git' className='buttonn' target='_blank'><BsGithub/></a>
                <a href='https://resume-builder-bx6y.vercel.app' className='buttonn' target='_blank'><FiLink/></a>
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
