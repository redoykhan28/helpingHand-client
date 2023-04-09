import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const OrderCard = ({ order, setDeleteOrder }) => {



    const { _id, email, phoneNumber, address, orders, payment, status } = order
    return (
        <div>
            <div className="card w-11/12 mx-auto my-10 bg-base-100 shadow-xl rounded-none rounded-br-full">
                <div className="card-body  text-start ">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">{email}</h2>
                        <label onClick={() => setDeleteOrder(order)} className="text-xl mr-10 text-red-600 hover:text-red-800 cursor-pointer" htmlFor="my-modal"><FaTrash /></label>
                    </div>
                    <p>- {orders}</p>
                    <div>
                        <p className='font-bold text-sm mt-3'>Address: {address}</p>
                        <p className='font-bold text-sm mt-1'>Phone: {phoneNumber}</p>
                    </div>
                    <div className=''>
                        <p className='text-sm my-3 text-blue-500'>Order {status}</p>
                        <div className="card-actions justify-start">
                            {
                                payment === 'paid' ?
                                    <p>Payment: <span className='text-green-600 font-bold'>Paid</span></p>
                                    :
                                    <Link to={`/payment/${_id}`}>
                                        <button className="btn btn-sm btn-success text-white hover:bg-green-800">Pay</button>
                                    </Link>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default OrderCard