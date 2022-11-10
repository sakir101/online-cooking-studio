import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../Assets/signup/signup.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
const Signup = () => {
    const { createUser, signInGoogleHandler } = useContext(AuthContext);
    const [error, setError] = useState();
    const googleProvider = new GoogleAuthProvider();
    useTitle('Register')
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast('Signup successful')
            })
            .catch(err => setError(err.message));
    }

    const googleSignIn = () => {
        signInGoogleHandler(googleProvider)
            .then(result => {
                const users = result.user;
                const currentUser = {
                    email: users.email
                }
                fetch('https://assignment-11-server-rouge-psi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast('Login Successful')
                        localStorage.setItem('rannabannaToken', data.token);
                    })

            })
            .catch(error => {
                console.log('error:', error)
            })
    }

    return (
        <div className="hero my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <div className='text-center lg:text-left'>
                        <img src={img} alt="" className='w-3/4' />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 text-center">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <form className="card-body " onSubmit={handleSignup}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className='btn bg-blue-600' />
                        </div>
                        <p className='text-xl text-red-700 font-bold'>{error}</p>
                        <div>
                            <button className='btn btn-outline btn-xl btn-rounded my-3 w-full' onClick={googleSignIn}>Google Signup</button>
                        </div>
                    </form>
                    <p className='text-sm text-center'>Already have an account <Link to='/login' className='text-red-600  font-bold'>Log in</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;