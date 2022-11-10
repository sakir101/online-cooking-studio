import React from 'react';
import img from '../../Assets/person/femalecooker.png'

const Achievement = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:justify-around">
                <div>
                <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                
                <div >
                    <h1 className="text-5xl font-bold">My Achievements</h1>
                    <p className="py-6 w-1/2">I got many prizes from international and national cooking competetion. If you are interested you can visit my social account pages. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Achievement;