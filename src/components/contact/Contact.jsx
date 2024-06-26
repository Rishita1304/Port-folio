import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eabd5gj', 'template_0kw1g8e', form.current, 'X1ZRBOk1YGsSn17dj')
      .then((result) => {
        window.location.reload();
        alert("Mail sent successfully!");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>

        <div className='contact__container container grid'>
            <div className='contact__content' data-aos='flip-up'>
                <h3 className='contact__title'>Talk to me</h3>

                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className='bx bx-mail-send contact__card-icon'></i>

                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>rishitasrivastava04@gmail.com</span>
                        <a className='link' href="mailto:rishitasrivastava04@gmail.com" target="_blank">Send a message</a>
                        {/* <a href='' className='contact__button'>Write me{' '} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a> */}
                    </div>
                    {/* <div className='contact__card'>
                        <i className='bx bxl-whatsapp contact__card-icon'></i>

                        <h3 className='contact__card-title'>Whatsapp</h3>
                        <span className='contact__card-data'>999-888-777</span>

                        <a href='' className='contact__button'>Write me{' '} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div> */}
                    {/* <div className='contact__card'>
                        <i className='bx bxl-messenger contact__card-icon'></i>

                        <h3 className='contact__card-title'>Messenger</h3>
                        <span className='contact__card-data'>user.fb123</span>

                        <a href='' className='contact__button'>Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div> */}
                </div>
            </div>

            <div className='contact__content'>
                <h3 className='contact__title'>Write me your queries</h3>

                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input type='text' name='name' className='contact__form-input' placeholder='Enter your name' />
                    </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Mail</label>
                        <input type='email' name='email' className='contact__form-input' placeholder='Enter your email' />
                    </div>
                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>Message</label>
                        <textarea name='message' cols='30' rows='40' className='contact__form-input' placeholder='Enter a message' />
                    </div>
                    <input className='button button--flex'
                        type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact