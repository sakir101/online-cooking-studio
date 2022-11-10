import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const message = form.desc.value;

        const service = {
            title: title,
            img: img,
            rating: rating,
            price: price,
            desc: message
        }


        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Service successfully placed');
                }
                form.reset();
            })
            .catch(err => console.error(err));
    }
    return (
        <form className='w-full text-center' onSubmit={handlePlaceService}>
            <h3 className='text-3xl text-blue-600 text-center'>Add Your Service</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6 mx-auto'>
                <input type="text" name='title' placeholder="Title of the food" className="input input-bordered input-primary w-full" required />
                <input type="number" name='price' placeholder="Price" className="input input-bordered input-primary w-full" required />
                <input type="number" name='rating' placeholder="Rating" className="input input-bordered input-primary w-full" />
                <input type="text" name='img' placeholder="Image url" className="input input-bordered input-primary w-full" />
            </div>
            <textarea name='desc' placeholder="food desc" className="textarea textarea-info h-24 w-full" required></textarea>
            <button className='btn btn-info my-5'>Submit</button>
            <ToastContainer />
        </form>
    );
};

export default AddService;