import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServicesCard = ({ allservice }) => {
    const { _id, title, img, rating, price, desc } = allservice;
    console.log(desc.length)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><PhotoProvider><PhotoView src={img}><img src={img} className='h-80 w-full' alt="" /></PhotoView></PhotoProvider></figure>
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