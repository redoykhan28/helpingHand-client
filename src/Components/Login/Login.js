import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import { Toaster, toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { getToken } from '../../Token/Token';

const Login = () => {

    //use location and navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();

    //use context
    const { login, googleSignin } = useContext(authProvider);


    //state for error
    const [error, setError] = useState(null)

    //use react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //handle login
    const handleLogin = (data) => {

        console.log(data)

        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                getToken(data?.email)
                navigate(from, { replaced: true })
                setError(null)
                reset()
                toast.success('Login Successfull')
            })
            .catch(err => {

                console.log(err)
                setError('Invalid Credentials!')
            })

    }

    //google login
    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {
        const role = 'customers'
        googleSignin(provider)
            .then(res => {

                const user = res.user;
                console.log(user)
                postUser(user?.displayName, user?.email, user?.photoURL, role)
                getToken(user?.email)
                navigate(from, { replaced: true })

            })
            .catch(err => console.log(err))

    }

    // post user
    const postUser = (name, email, image, role) => {

        const currentUser = {

            name,
            email,
            image,
            role

        }

        fetch('https://helpinghand-server.vercel.app/users', {
            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)


            })

    }


    return (
        <div data-aos="fade-up" className=' rounded-lg shadow-sm flex justify-center items-center w-96 mt-8 mb-10 mx-auto border border-gray-200'>
            <div className="card w-96 p-8 bg-base-100 ">
                <h4 className='text-center text-2xl mt-4 mb-6'>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className='mt-4 text-start'>
                        <label htmlFor="email">Email</label>
                        <input {...register('email', { required: 'This field is required' })} type="email" className="input         input-bordered w-full rounded-sm mt-1" />

                        {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}

                    </div>

                    <div className='mt-4 text-start'>
                        <label htmlFor="password">Password</label>
                        <input  {...register('password', { required: 'This field is required', minLength: { value: 6, message: 'Password Should be 6 length long' } },
                        )} type="password" className="input input-bordered w-full rounded-sm mt-1" />

                        {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}

                    </div>

                    <p className='text-red-600 my-3 text-start'><small>{error}</small></p>
                    <input type="submit" className='btn bg-[#00A3FE] border-none text-white mt-8 w-full rounded-sm' value={'Login'} />

                </form>

                <p className='my-2'>Need an account? <Link className='text-blue-600' to={'/signup'}>Signup</Link></p>
                <div className="divider divider-horizontal w-11/12 mx-auto">OR</div>

                <button onClick={handleGoogle} className='btn btn-outline btn-black rounded-sm'>< FaGoogle className='text-red-600 mr-2' /> Login with Google</button>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;