import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    useTitle('My Review');
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])
    useEffect(()=>{
        fetch(`https://assignment-11-server-rouge-psi.vercel.app/onereview?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('rannabannaToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user])
    return (
        <div>
            {
                myReviews.length ===0? <div className='text-3xl text-red-600 font-bold flex items-center justify-center'>No Review to show</div>:
                myReviews.map(myReview=> <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;