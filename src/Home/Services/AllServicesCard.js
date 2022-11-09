import React from 'react';

const AllServicesCard = ({ allservice }) => {
    const { _id, title, img, rating, price, desc } = allservice;
    console.log(desc.length)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} className='h-80 w-full' alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">Rating: {rating}/5</div>
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

export default AllServicesCard;