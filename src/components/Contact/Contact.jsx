import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
         <p>feel free to reach out through from or find our contact information felow. Your feedback, questions, and suggestions are important to us as we strive to provide exceptioal service to our university community.</p>
         <ul>
           <li> <img src={mail_icon} alt="" />Contact@hamrocollege.au</li>
           <li> <img src={phone_icon} alt="" />+61222233333</li>
           <li> <img src={location_icon} alt="" />Kensington Road, Summer Hill, 2130, NSW, Australia</li>
         </ul>
      </div>
      <div className="contact-col">
         
      </div>
    </div>
  )
}

export default Contact;