import React from 'react';
import {retail} from "../assets";


const Retail = () => {
    return (
       <section id="retail" className='retail-container'>
        <div className='retail-image'>
             <img src={retail} alt="retail" style={{'max-width': '35vw'}} />
        </div>
        <div className='retail-text'>
        Unlock your dormant revenue potential and influence buying decisions with Colris indoor system.
        </div>
       </section>
    );
};

export default Retail;