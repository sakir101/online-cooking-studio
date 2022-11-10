import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllService = () => {
    const [allservices, setAllServices] = useState([]);
    useTitle('Service');
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    return (
        <div>
            <div className='text-end'>
               <Link to={user?.uid? '/addservice': '/login'}><button className='btn btn-primary'>Add Service</button></Link> 
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 w-3/4 mx-auto'>
            {
                allservices.map(allservice => <AllServicesCard key={allservice._id} allservice={allservice}></AllServicesCard>)
            }
        </div>
        </div>
        
    );
};

export default AllService;