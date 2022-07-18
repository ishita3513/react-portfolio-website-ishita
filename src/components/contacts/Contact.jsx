import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhemfcq', 'template_m2kiouo', form.current, 'fpWuLw9pGPDFQXI72')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>ishitakumaripakur@gamil.com</h5>
              <a href="mailto:ishitakumaripakur@gamil.com" target="_blank">Send an email</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='name' placeholder='Your Email' required/>
          <textarea name="message"  rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact