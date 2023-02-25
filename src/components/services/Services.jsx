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
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>Designer</h3>
                </div>
                <span className='services__button' onClick={() => toggleTab(1)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Designer</h3>
                        <p className='services__modal-description'>Service with 2 months of experience. Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    <a href='https://portfolio-tntm.onrender.com' >
                                        Designed website pages.
                                        </a>
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                   Posters for events.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    ID cards.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    T-shirts.
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
                        <p className='services__modal-description'>Service with 2 months of experience. Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    C++, C, Python.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                   1 Star Coder at Codechef.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    2 Star Coder at Hackerrank.
                                </p>
                            </li>
                            {/* <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I position your company brand.
                                </p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
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
                        <p className='services__modal-description'>Service with 2 months of experience. Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    Develop the Backend server with NodeJS.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                   Web page Development.
                                </p>
                            </li>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                     API's.
                                </p>
                            </li>
                            {/* <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I position your company brand.
                                </p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services