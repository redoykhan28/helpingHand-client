import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import TotalOrdersCard from './TotalOrdersCard';
import CancelModal from '../Profile/CancelModal';

const TotalOrder = () => {

    //deleting order
    const [deleteOrder, setDeleteOrder] = useState(null)

    //use query to load data
    const { data: totalOrders = [], refetch, isLoading } = useQuery({

        queryKey: ['totalOrders'],
        queryFn: () => fetch('https://helpinghand-server.vercel.app/allorders', {

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
            <h1 className='mt-4 mb-10 text-3xl text-center'>Total Orders</h1>
            <div data-aos='fade-up'>
                {
                    totalOrders.map(orders => <TotalOrdersCard key={orders._id} setDeleteOrder={setDeleteOrder} order={orders}></TotalOrdersCard>)
                }
            </div>
            {
                deleteOrder &&
                <CancelModal refetch={refetch} deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} message={'Are you sure you wants to Delete?'}></CancelModal>

            }
        </div>
    );
};

export default TotalOrder;