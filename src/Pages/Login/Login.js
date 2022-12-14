import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../Assets/signup/login.jpg'
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { handleSignin } = useContext(AuthContext);
    const [error, setError] = useState('')
    useTitle('Login')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignin(email, password)
            .then(result => {
                const user = result.user;

                form.reset();
                const currentUser = {
                    email: user.email
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
                        navigate(from, { replace: true });
                    })

            })
            .catch(err => setError(err.message))
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
                    <h1 className="text-5xl font-bold">Login</h1>
                    <form className="card-body " onSubmit={handleLogin}>

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
                            <input type="submit" value="Login" className='btn bg-blue-600' />
                        </div>
                        <div>
                        <p className='text-xl text-red-700 font-bold'>{error}</p>
                        </div>
                       
                    </form>
                    <p className='text-sm text-center'>New to Rannabanna <Link to='/signup' className='text-red-600  font-bold'>Sign Up</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;