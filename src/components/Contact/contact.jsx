import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2pjic2r', 'template_2ixccqk', form.current, 'dQyvjx5WiqJ0g2y9g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id = 'contact'>
     <h5>Get in touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">

      <div className="contact__options">
          <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>hatim.zahid1996@gmail.com</h5>
              <a href="mailto:hatim.zahid1996@gmail.com"  target="_blank">Send a Message</a>
          
          </article>
          <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+14376739579</h5>
              <a href="https://api.whatsapp.com/send?phone+923353266221" target="_blank">Send a Message</a>
          
          </article>
      </div>

      <form ref= {form} onSubmit= {sendEmail}>
        <input type="text" name = 'name'  placeholder='Your Full Name' required  />
        <input type="email" name = 'name'  placeholder='Your Email' required  />
        <textarea name = 'message'   rows= "7" placeholder='Your Message' required  />
        <button type='Submit' className='btn btn-primary'>Send Message</button>



      </form>

    </div>

    </section>
  )
}

export default Contact