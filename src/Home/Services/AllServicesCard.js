import React from 'react';

const AllServicesCard = ({ allservice }) => {
    const { _id, title, img, rating, price, desc } = allservice;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} className='h-80 w-full' alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;