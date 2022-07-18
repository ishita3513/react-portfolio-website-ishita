import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import {BsWhatsapp} from 'react-icons/bs'
import { useRef as UseRef} from 'react'
import emailjs from 'emailjs-com'

const contact = () => {
  const form =UseRef();
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