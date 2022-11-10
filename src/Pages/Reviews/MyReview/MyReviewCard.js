import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({myReview}) => {
    const {name, img, rating, desc, serviceName} = myReview;
    return (
        <div className='bg-slate-200 my-5 p-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={img} className='h-16 rounded-full' alt="" />
                    <p className='font-bold mx-3'>{name}</p>
                </div>
                <div>
                    <p className='text-xl font-bold'>{serviceName}</p>
                    <p className='text-xs'>Rating: {rating}</p>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>{desc}</p>
                <Link to='/updateReview'></Link><button className='btn btn-sm btn-primary mx-3'>Update</button>
                <button className='btn btn-sm bg-red-700 mx-3'>Delete</button>
            </div>
        </div>
    );
};

export default MyReviewCard;