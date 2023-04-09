import React, { useContext, useState } from 'react';
import { authProvider } from '../../Context/AuthContext';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import empty from '../../Assets/empty/3298067.jpg'
import OrderCard from './OrderCard';
import CancelModal from './CancelModal';

const Profile = () => {

    //use context
    const { user } = useContext(authProvider)

    //deleting order
    const [deleteOrder, setDeleteOrder] = useState(null)

    //use query to load data
    const { data: myOrders = [], refetch, isLoading } = useQuery({

        queryKey: ['myOrders'],
        queryFn: () => fetch(`http://localhost:5000/orders?email=${user?.email}`, {

            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())

    })

    //use query to load data
    const { data: profile = [] } = useQuery({

        queryKey: ['profile'],
        queryFn: () => fetch(`http://localhost:5000/userProfile?email=${user?.email}`, {

            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())

    })

    if (isLoading) {

        return <Loader></Loader>
    }

    return (
        <div>
            <div data-aos="fade-up" className="w-full lg:w-11/12 mx-auto">
                <div className="flex mt-10 flex-col lg:flex-row justify-between">
                    <div className='w-full lg:sticky top-0 lg:w-3/12 lg:mx-6'>
                        <div className="avatar online">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    profile.map(user => <img src={user?.image} alt='profile' />)
                                }

                            </div>

                        </div>
                        <div>
                            <h1 className='text-xl font-bold my-3'>Redoy Khan</h1>
                        </div>
                        <p className='text-gray-500 text-sm my-2'>Total Orders:{myOrders.length}</p>
                    </div>
                    <div className='w-full lg:w-9/12 lg:mx-6'>
                        <h1 className="text-3xl mb-10 font-bold">My Orders</h1>
                        {
                            myOrders?.length <= 0 ?
                                <div className='w-1/4 mx-auto mt-20'>
                                    <img src={empty} alt="empty" />
                                    <h1 className='mt-4 font-bold text-2xl'>No Data Found!</h1>
                                </div>
                                :
                                <div>
                                    {
                                        myOrders?.map(order => <OrderCard key={order?._id} setDeleteOrder={setDeleteOrder} refetch={refetch} order={order}></OrderCard>)
                                    }
                                </div>
                        }

                    </div>
                </div>
            </div>
            {
                deleteOrder &&
                <CancelModal refetch={refetch} deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} message={'Are you sure you wants to Delete?'}></CancelModal>

            }
        </div>
    );
};

export default Profile;