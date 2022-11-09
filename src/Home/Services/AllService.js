import React,{useState, useEffect} from 'react';
import AllServicesCard from './AllServicesCard';

const AllService = () => {
    const [allservices, setAllServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 w-3/4 mx-auto'>
            {
                allservices.map(allservice => <AllServicesCard key={allservice._id} allservice={allservice}></AllServicesCard>)
            }
        </div>
    );
};

export default AllService;