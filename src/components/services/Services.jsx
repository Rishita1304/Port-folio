import React, {useState} from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I Offer</span>

        <div className='services__container container grid'>
        <div className='services__content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Developer</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(3)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'> Developer</h3>
                        {/* <p className='services__modal-description'>Service with 2 months of experience. Providing quality work to clients and companies.</p> */}

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                A MERN Developer.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Using React.js, I can built user-friendly and responsive web interfaces.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I can develope robust and scalable server-side APIs.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I can ensure the security of the backend by implementing authentication and authorization mechanisms, such as JSON Web Tokens or OAuth.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                               I can work on many databases like MongoDb and firebase.                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>Contributor</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(1)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Contributor</h3>
                        <p className='services__modal-description'>Service with 2 months of experience. Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I am a active Open Source Contributor.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                A active participant of GirlScript Summer of Code.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I have been working as a team, with 3+ PRs merged.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                <i class="uil uil-brackets-curly services__icon"></i>
                    <h3 className='services__title'>Programmer</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(2)}>View More <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Programmer</h3>
                        <p className='services__modal-description'>.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I am a C++ programmer.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I can work for code optimization.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Currently learning about concepts of Data Structures and Algorithm.                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                I can apply my programming skills as to write a concised code.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services