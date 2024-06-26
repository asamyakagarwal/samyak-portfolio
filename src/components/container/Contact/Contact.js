import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {

  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k58x1w', 'template_fa29mm9', form.current, 'lbO3SvpNqfeVuLEeA')
    
    e.target.reset() ;
      
  };


  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>If you have any question or wanna talk  <br/>  please feel free for contact me </p>
         
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {/* eslint-disable-next-line */}
                <a href={socialIcon.link} target='blank'>
                {socialIcon.icon}
                </a>
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          {/* <!-- Honeypot --> */}
          {/* <input type='text' name='_honey' className='honey' ></input>

          {/* Disable Captcha */}
          {/* <input type='hidden' name='_captcha' value="false" ></input> */} 


          <div className="row">
            <input type="text" placeholder='First&nbsp;Name' name="First name" required/>
            <input type="text" placeholder='Last&nbsp;name' name="Last name" required/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' name='Phone' />
            <input type="email" placeholder='Email' name='Email' required/>
          </div>
          <div className="row">
            <textarea placeholder='Message' name='Message' required></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <button type="subbmit">Send</button>
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact