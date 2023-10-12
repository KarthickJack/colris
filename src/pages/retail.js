import React from 'react';

const Retail = () => {
    return (
        <React.Fragment>
            <section>
                <div className='w-screen h-screen grid grid-rows-2'>
                    <div className='w-full h-full bg-blue-800'>
                        <p>page 1</p>
                    </div>
                    <div className='w-full h-full bg-black-800'>
                        <p>page 2</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Retail;