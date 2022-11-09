import React from 'react';

const ServiceCard = ({ service }) => {
    const {_id, title, img, rating, price, desc} = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} className='h-80 w-full' alt="" /></figure>
                <div className="card-body text-start">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p>
                    {
                        desc.length> 100? `${desc.slice(0,100)}...`: {desc}
                    }
                   </p>
                   <p className='font-bold text-red-600'>Price: {price} BDT</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-outline">View Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;