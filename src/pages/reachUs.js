import React from 'react';
import {facebook, instagram, linkedin, twitter} from "../assets";



const ReachUs = () => {
    return (<div className='reachUs-content'>
    <div className='todos d2'>
    {/* <Brand className="logo" /> */}
      <h6>Colris Digital Private Ltd.</h6>
    </div>
    <div className='todos d2'>
    <h6>Colris Digital Private Ltd.</h6>
      <p>1049, Nesamani Nagar, Asaripallam road, Nagercoil.</p>
      <p>+91 7598 153 159</p>
      <p>info@colris.com</p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
         
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
  </div>
</div>);
};

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export default ReachUs;
