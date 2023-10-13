import React from 'react';
// import Services from './pages/services';
import Button from '../components/explore';
import {dooh, hero} from "../assets";


const Home = () => {
    return (<section id="`home`" className='home-content'>
        <hero>Empowering Your BRAND'S</hero>
        <hero-green>Digital Evolution.</hero-green>
        <p>Elevate your brand with the Next Frontier of Out-Of-Home Advertising!</p>
        <div>
        {/* <div className='hero-image'>
             <img src={hero} alt="hero" style={{width: '477px'}} />
        </div> */}
        <Button/>
        </div>
        

    {/* <div className='d3'>
  
    </div> */}
  </section>);
  };

export default Home;
