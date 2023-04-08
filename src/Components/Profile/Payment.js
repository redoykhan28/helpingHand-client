import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loader from '../Loader/Loader';

const stripePromise = loadStripe('pk_test_51MuZ6PC1mXyDIWRi7k9ozle2EYUiTgWjGmkmywF4SIBbBssDLNDknwG4ZIzfIrVxOTLmdasHBNIqn7A4nRYe42pz00rT1LE6wP');

console.log(stripePromise)

const Payment = () => {

    const data = useLoaderData()
    console.log(data)

    const navigation = useNavigation()

    if (navigation.state === 'loading') {

        return <Loader />
    }


    return (
        <div>
            <h1 className='text-3xl my-5'>Payment</h1>
            <h1 className='text-sm'>Order: {data?.orders}</h1>
            <h1 className='text-sm'>Location: {data?.address}</h1>
            <div className='mt-16 mb-20 w-96 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm orderInfo={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;