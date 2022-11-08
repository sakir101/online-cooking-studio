import React from 'react';
import fish from '../../Assets/items/fishFry.jpg'
import sweet from '../../Assets/items/sweets.jpg'
import curry from '../../Assets/items/curry.jpg'
import chicken from '../../Assets/items/chicken.jpg'
const About = () => {
    return (
        <div className="hero my-20">
            <div className='hero-content flex-col lg:flex-row w-full'>
                <div className='relative w-1/2 mx-5'>
                    <div className="carousel w-full h-80">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={fish} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={sweet} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={curry} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={chicken} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-red-600 font-bold'>About Me</p>
                    <h3 className="text-5xl font-bold text-blue-600">
                        Find Your <br />
                        Your Delicious<br />
                        Food Items
                    </h3>
                    <p className="py-6">Me Sulatana Jahanara. I am expert in various cooking items. This is my webpage. Here I will provie all kind of food items and unique items. This webpage is all about my cooking items. If you want to visit my service you have log in in this site</p>
                </div>
            </div>

        </div>
    );
};

export default About;