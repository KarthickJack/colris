import React from 'react';
import Button from '../components/contact';

const services = () => {
  return (<div className='service-content'>
      <div className='todos d1'>
        <h6>What DOOH? Why DOOH?</h6>
        <p style={{ color: "#A9E435" }}>DOOH is modern advertising leveraging LED walls for dynamic, targeted, and measurable campaigns.</p>
        <p style={{ color: "#A9E435" }}>DOOH delivers engaging ads in high-traffic locations, ensuring attention with premium, artistic installations.</p>
      </div>
      <div className='todos d2'>
        <h6>Colris ??</h6>
        <p>"We offer
Exclusive venues that ensure a high audience impression,
Premium design service for achieving campaign goals, and 
the market's finest screens.</p>
    </div>
    <div className='d3'>
    <div className='rental'>
    <h6>Rental Ads</h6>
      <p>
        "Capture audience attention with captivating and subtle motion graphics on our exclusive public/private venues as per your budget. Buy our slots for as short as 900 minutes capturing 10% of the share of voice per day.</p>
        <div style={{ padding : 10 }}>
    <Button/>
    </div>
    </div>
    </div>

  </div>);
};

export default services;