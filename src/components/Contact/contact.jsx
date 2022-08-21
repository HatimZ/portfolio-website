import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import './contact.css'

const contact = () => {
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
              <h5>+923353266221</h5>
              <a href="https://api.whatsapp.com/send?phone+923353266221" target="_blank">Send a Message</a>
          
          </article>
      </div>

      <form action="">
        <input type="text" name = 'name'  placeholder='Your Full Name' required  />
        <input type="email" name = 'name'  placeholder='Your Full Name' required  />
        <textarea name = 'message'   rows= "7" placeholder='Your Message' required  />
        <button type='Submit' className='btn btn-primary'>Send Message</button>



      </form>

    </div>

    </section>
  )
}

export default contact