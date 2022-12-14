import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../../Pages/Reviews/Reviews';


const SingleServices = () => {
    const { _id, title, img, desc, price, rating } = useLoaderData();
   useTitle('Single Service');
    return (
        
            <div className='p-5'>
                <div className='text-center'>
                    <h3 className='text-5xl font-bold my-5'>{title}</h3>
                    <h4 className='text-2xl text-blue-700 my-3'>Price: {price} BDT</h4>
                    <h4 className='text-2xl text-blue-700 my-3'>Rating: {rating}/5</h4>
                    <img src={img} className='w-1/2 mx-auto my-3' alt="" />
                </div>
                <p className='my-5'>{desc}</p>
                <Reviews _id={_id} title={title}></Reviews>
            </div>
       


    );
};


export default SingleServices;