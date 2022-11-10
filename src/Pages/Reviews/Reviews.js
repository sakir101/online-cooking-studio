import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewCard from './ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider';

const Reviews = ({ _id, title }) => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    
    const p = 1;
    const handleReview = event => {
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const message = form.desc.value;
        
        const review = {
            name: name,
            email: email,
            rating: rating,
            img: img,
            serviceId: _id,
            serviceName: title,
            time: moment().format('LTS'), 
            desc: message
        }
       
        

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Review successfully placed');
                }
                form.reset();
            })
            .catch(err => console.error(err));
    }

    
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            const filterData = data.filter(x => x.serviceId === _id )
            setReviews(filterData);
        })
    },[_id])
    return (
        <div>
            <div className='flex justify-between my-6'>
                <h3 className='text-2xl font-bold'>People's Review</h3>

                <label htmlFor={
                    user?.uid ?
                    "my-modal"  :
                         "login-modal"
                } className="btn">open modal</label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal" >
                    <div className="modal-box">
                        <form className='w-full text-center' onSubmit={handleReview}>
                            <h3 className='text-3xl text-blue-600 text-center'>Add Your Review</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 mx-auto'>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary w-full" required />
                                <input type="email" name='email' placeholder="Email" className="input input-bordered input-primary w-full" required />
                                <input type="number" name='rating' placeholder="Rating" className="input input-bordered input-primary w-full" required />
                                <input type="text" name='img' placeholder="Your image url" className="input input-bordered input-primary w-full" />
                            </div>
                            <textarea name='desc' placeholder="food desc" className="textarea textarea-info h-24 w-full" required></textarea>
                            <button className='btn btn-primary my-5'>Submit</button>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">Close</label>
                            </div>
                            <ToastContainer />
                        </form>

                    </div>
                </div>
                <input type="checkbox" id="login-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Please login first</h3>
                        <Link to='/login'><button className='btn btn-primary my-5'>Login</button></Link>
                        <div className="modal-action">
                            <label htmlFor="login-modal" className="btn">Ok</label>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard> )
                }
            </div>

        </div>

    );
};

export default Reviews;
