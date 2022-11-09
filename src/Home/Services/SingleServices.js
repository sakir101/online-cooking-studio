import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Pages/Reviews/Reviews';

const SingleServices = () => {
    const {title, img, desc, price, rating} = useLoaderData();
   
    return (
        <div className='p-5'>
           <div className='text-center'>
                <h3 className='text-5xl font-bold my-5'>{title}</h3>
                <h4 className='text-2xl text-blue-700 my-3'>Price: {price} BDT</h4>
                <h4 className='text-2xl text-blue-700 my-3'>Rating: {rating}/5</h4>
                <img src={img} className='w-1/2 mx-auto my-3' alt="" />
            </div> 
            <p className='my-5'>{desc}</p>
            <Reviews></Reviews>
        </div>
    );
};

export default SingleServices;