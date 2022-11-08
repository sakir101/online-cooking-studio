import React from 'react';
import chef from '../../Assets/banner/femaleChef.png'

const Banner = () => {
    return (
        <div className='hero-content flex-col-reverse lg:flex-row justify-around items-center bg-black py-5 w-full'>
            <div>
                <h1 className='text-4xl lg:text-6xl font-bold text-white'>
                    Welcome to My <br />
                    Rannabanna <br />
                    Website
                </h1>
            </div>
            <div>
                <img src={chef} alt="Female Chef" className='sm:h-1/2'/>
            </div>

        </div>
    );
};

export default Banner;