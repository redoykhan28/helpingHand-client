import React, { useContext, useState } from 'react';
import image from '../../Assets/Order/5359105_5359105.jpg'
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { authProvider } from '../../Context/AuthContext';

const Order = () => {

    //usecontext
    const { user } = useContext(authProvider)

    //use react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleOrder = (data) => {

        console.log(data)
        const payment = 'Due'
        const status = 'Pending'

        const currentOrder = {

            email: user?.email,
            phoneNumber: data?.phone,
            address: data?.address,
            orders: data?.order,
            payment: payment,
            status: status

        }

        fetch('http://localhost:5000/orders', {

            method: "POST",
            headers: {

                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify(currentOrder)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success("Order Placed Successfully!")
                reset()
            })

    }

    return (
        <div>
            <div data-aos="fade-up" className="hero  w-full lg:w-9/12 mx-auto lg:my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <img src={image} className="rounded-lg" alt='img' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <h1 className="text-2xl md:text-4xl mb-2 font-bold">Order Your Necessary Products</h1>
                        <p className='text-sm text-gray-500 mb-10'>Let's Order the product I need..</p>
                        <form onSubmit={handleSubmit(handleOrder)} className='flex flex-col'>

                            <div className='mb-2 w-full text-start'>
                                <label htmlFor="email">Email</label>
                                <input readOnly defaultValue={user?.email} type="email" className="input   input-bordered w-full rounded-sm mt-1" />
                            </div>
                            <div className='my-2 w-full text-start'>
                                <label htmlFor="phone">Phone</label>
                                <input {...register('phone', { required: 'This field is required' })} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.phone && <p className='text-red-600'><small>{errors.phone.message}</small></p>}
                            </div>

                            <div className='my-2 w-full text-start'>
                                <label htmlFor="address">Address</label>
                                <input {...register('address', { required: 'This field is required' })} type="text" className="input input-bordered w-full rounded-sm mt-1" />

                                {errors.address && <p className='text-red-600'><small>{errors.address.message}</small></p>}
                            </div>

                            <div className='mt-2 w-full text-start'>
                                <label htmlFor="order">Your Orders</label>
                                <textarea {...register('order', { required: 'This field is required' })} className="textarea w-full h-36 textarea-bordered" name='order' placeholder="Write down your orders.."></textarea>
                                {errors.order && <p className='text-red-600'><small>{errors.order.message}</small></p>}
                            </div>
                            <input type='submit' value={'Place Order'} className='btn mt-6 bg-[#ff735c] text-white hover:bg-[#CD4F40] border-0' />
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Order;