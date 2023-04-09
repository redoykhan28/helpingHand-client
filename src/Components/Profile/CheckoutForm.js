import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ orderInfo }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const booking = { price: 100 };
    const { email, payment, orders, _id } = orderInfo

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://helpinghand-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking])


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {

            setError(confirmError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {



            const paymentInfo = {
                email: email,
                orders: orders,
                transactionId: paymentIntent.id,
                orderId: _id
            }

            fetch('https://helpinghand-server.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        setSuccess('Congrats! your Payment Completed')
                        setTransaction(paymentIntent.id)
                    }
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm my-5 text-white hover:bg-green-600' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-sm text-red-600'>{error}</p>
            {
                success &&
                <>
                    <p className='text-sm text-green-600'>{success}</p>
                    <p className='text-sm'>Your Transaction Id: <span className='font-bold'>{transaction}</span> </p>
                </>
            }
        </>

    );
};

export default CheckoutForm;