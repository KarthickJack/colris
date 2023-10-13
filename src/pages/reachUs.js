import React from 'react';
import {facebook, instagram, linkedin, twitter} from "../assets";



const ReachUs = () => {
    return (  

    <section id="`contact`" className='bottom-text'>
      <div class="line"></div>
    <h6>Colris Digital Private Ltd.</h6>
      <div className='bottom-text-para'>1049, Nesamani Nagar, Asaripallam road, Nagercoil.</div>
      <div className='bottom-text-para'>+91 7598 153 159</div>
      <div className='bottom-text-para'>info@colris.com</div>
      <div className="foot-container">
        {socialMedia.map((social, index) => (
          <img className='socials'
            key={social.id}
            src={social.icon}
            alt={social.id}
         
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
  </section>);
};

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/colris_digital/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/people/Colris-Digital/61551780283709/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/colris-digital-private-limited/",
  },
];

export default ReachUs;
