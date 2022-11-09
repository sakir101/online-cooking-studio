import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, img, rating, desc, _id } = review
    return (
        <div className='bg-slate-200 my-5 p-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={img} className='h-16 rounded-full' alt="" />
                    <p className='font-bold mx-5'>{name}</p>
                </div>
                <div>
                    <p className='text-xs'>Rating: {rating}</p>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>{desc}</p>
            </div>
        </div>
    );
};

export default ReviewCard;