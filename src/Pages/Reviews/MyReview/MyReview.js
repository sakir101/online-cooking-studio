import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/review/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user])
    return (
        <div>
            {
                myReviews.map(myReview=> <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;