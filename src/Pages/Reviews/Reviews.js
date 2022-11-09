import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = ({ _id, title }) => {
    console.log(title)
    const p = 1;
    return (
        <div>
            <div className='flex justify-between my-6'>
                <h3 className='text-2xl font-bold'>People's Review</h3>

                <label htmlFor={
                    p === 0 ?
                        "login-modal" :
                        "my-modal"
                } className="btn">open modal</label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form className='w-full text-center' >
                            <h3 className='text-3xl text-blue-600 text-center'>Add Your Service</h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 mx-auto'>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary w-full" required />
                                <input type="email" name='email' placeholder="Email" className="input input-bordered input-primary w-full" required />
                                <input type="number" name='email' placeholder="Rating" className="input input-bordered input-primary w-full" required />
                                <input type="text" name='img' placeholder="Your image url" className="input input-bordered input-primary w-full" />
                            </div>
                            <textarea name='desc' placeholder="food desc" className="textarea textarea-info h-24 w-full" required></textarea>
                            <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Submit</label>
                        </div>
                        </form>
                        
                    </div>
                </div>
                <input type="checkbox" id="login-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Please login first</h3>
                        <button className='btn btn-primary'>Login</button>
                        <div className="modal-action">
                            <label htmlFor="login-modal" className="btn">Ok</label>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>

    );
};

export default Reviews;