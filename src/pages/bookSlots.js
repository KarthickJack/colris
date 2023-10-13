import React from 'react';
import {dooh} from "../assets";


const BookSlots = () => {
    return (
        <div className='dooh-container'>
        <div className='retail-image'>
             <img src={dooh} alt="dooh" style={{'max-width': '45vw'}} />
        </div>
        <div className='dooh-text'>
        Capture audience attention with captivating and subtle motion graphics.
        </div>
       </div>
    );
};

export default BookSlots;
