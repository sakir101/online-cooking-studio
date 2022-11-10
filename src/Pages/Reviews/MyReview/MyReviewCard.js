import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviewCard = ({ myReview }) => {
    const {_id,name, img, rating, desc, serviceName} = myReview;
    const handleReview = event => {
        event.preventDefault()
        const form = event.target;  
        const rating = form.rating.value;
        const message = form.desc.value;

        const update = {
            rating: rating,
            desc: message
        }

        fetch(`https://assignment-11-server-rouge-psi.vercel.app/review/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(update)

        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                toast('Update review successfully')
            }
        })
    }

    const refresh = () =>{
        window.location.reload(false);
    }

    const handleDelete = () =>{
        const proceed = window.confirm(`Are you sure you want to delete`)
        if(proceed){
            fetch(`https://assignment-11-server-rouge-psi.vercel.app/review/${_id}`, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                    if (data.deletedCount > 0) {
                        toast('Delete Review Successfully');
                        window.location.reload(false);
                    }
                
            })

        }
    }
    return (
        <div className='bg-slate-200 my-5 p-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={img} className='h-16 rounded-full' alt="" />
                    <p className='font-bold mx-3'>{name}</p>
                </div>
                <div>
                    <p className='text-xl font-bold'>{serviceName}</p>
                    <p className='text-xs'>Rating: {rating}</p>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>{desc}</p>
                <label htmlFor={
                    
                    "my-modal"  
                        
                } className="btn btn-sm">Update Review</label>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal" >
                    <div className="modal-box">
                        <form className='w-full text-center' onSubmit={handleReview}>
                            <h3 className='text-3xl text-blue-600 text-center'>Add Your Review</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 mx-auto'>
                                <input type="text" name='name' placeholder="Name" defaultValue={name} className="input input-bordered input-primary w-full" readOnly/>
                                <input type="text" name='service' placeholder="Service" defaultValue={serviceName} className="input input-bordered input-primary w-full" readOnly/>
                                <input type="number" name='rating' placeholder="Rating" className="input input-bordered input-primary w-full" defaultValue={rating}/>
                            </div>
                            <textarea name='desc' placeholder="food desc" className="textarea textarea-info h-24 w-full" defaultValue={desc}></textarea>
                            <button className='btn btn-primary my-5'>Submit</button>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn" onClick={refresh}>Close</label>
                            </div>
                            <ToastContainer />
                        </form>

                    </div>
                </div>
                <button className='btn btn-sm bg-red-700 mx-3' onClick={handleDelete}>Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyReviewCard;