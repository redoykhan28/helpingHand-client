import React from 'react';
import { toast } from 'react-hot-toast';

const TotalOrdersCard = ({ order }) => {
    const { email, phoneNumber, address, orders, payment, status } = order


    //update to accept
    const handleAccept = (order) => {
        fetch(`http://localhost:5000/acceptStatus/${order._id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`Order Accepted`);
                    window.location.reload()
                }
            })
    }

    //update to canceled
    const handleCancled = (order) => {
        fetch(`http://localhost:5000/cancelStatus/${order._id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Order canceled');
                    window.location.reload()
                }
            })
    }
    return (
        <div >
            <div className="card w-11/12 mx-auto my-10 bg-base-100 shadow-xl rounded-none rounded-br-full">
                <div className="card-body  text-start ">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">{email}</h2>
                    </div>
                    <p>- {orders}</p>
                    <div>
                        <p className='font-bold text-sm mt-3'>Address: {address}</p>
                        <p className='font-bold text-sm mt-1'>Phone: {phoneNumber}</p>
                    </div>
                    <div className=''>
                        <p className='text-sm my-3 text-blue-500'>Payment {payment}</p>
                        <div className="card-actions justify-start">

                            {
                                status === 'Confirmed' || status === 'Canceled' ?
                                    <p className='text-md text-semibold'><span className='text-blue-600'>Order {status} !</span></p>
                                    :
                                    <div className='flex items-center gap-x-2'>
                                        <button onClick={() => handleAccept(order)} className="btn btn-sm btn-success text-white hover:bg-green-800">Accept</button>

                                        <button onClick={() => handleCancled(order)} className="btn btn-sm btn-error text-white border-none hover:bg-red-800">Deny</button>
                                    </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TotalOrdersCard