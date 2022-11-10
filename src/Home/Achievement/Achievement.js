import React from 'react';
import img from '../../Assets/person/femalecooker.png'

const Achievement = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:justify-around">
               
                <img src={img} alt='' className="rounded-lg shadow-xl h-80" />
              
                
                <div className='mx-5'>
                    <h1 className="text-4xl font-bold">My Achievements</h1>
                    <p className="py-6  w-1/2">I got many prizes from international and national cooking competetion. If you are interested you can visit my social account pages. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Achievement;