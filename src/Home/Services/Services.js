import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center w-full'>
            <div>
                <h2 className='text-3xl text-blue-700 font-bold'>My Services</h2>
                <p className='text-sm w-1/2  mx-auto my-5'>Here you will get delicious food cooking procedure. Please add your review after trying every item.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 w-3/4 mx-auto'>
               {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
            <Link to='/allservice'><button className='btn btn-primary btn-lg my-5'>Load More</button></Link>
        </div>
    );
};

export default Services;