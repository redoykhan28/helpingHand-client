import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import TotalOrdersCard from './TotalOrdersCard';

const TotalOrder = () => {

    //use query to load data
    const { data: totalOrders = [], refetch, isLoading } = useQuery({

        queryKey: ['totalOrders'],
        queryFn: () => fetch('http://localhost:5000/allorders', {

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
            <div>
                {
                    totalOrders.map(orders => <TotalOrdersCard key={orders._id} order={orders}></TotalOrdersCard>)
                }
            </div>
        </div>
    );
};

export default TotalOrder;