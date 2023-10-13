import React from 'react';
import {dooh} from "../assets";


const BookSlots = () => {
    return (
        <section id="`dooh`" className='dooh-container'>
        <div className='retail-image'>
             <img src={dooh} alt="dooh" style={{'max-width': '45vw'}} />
        </div>
        <div className='dooh-text'>
        Capture audience attention with captivating and subtle motion graphics.
        </div>
       </section>
    );
};

export default BookSlots;
